import type { Node } from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, boolean, number, InferType } from "yup";
import classNames from "classnames";

import FormSpacer from "../form/FormSpacer/FormSpacer";
import FormLine from "../form/FormLine/FormLine";
import FormError from "../form/FormError/FormError";
import CloseButton from "../CloseButton/CloseButton";

import "./RsvpForm.scss";

export enum FormState {
  CLOSED,
  OPEN,
  SUBMITTED,
}

type PropTypes = {
  state?: FormState;
  handleCancel?: () => void;
  handleSuccess?: () => void;
  wording: i18nRsvpWording;
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const RsvpForm = ({
  state,
  handleCancel,
  handleSuccess,
  wording,
}: PropTypes) => {
  const responseSchema = object({
    name: string().required(wording.requiredError),
    isAttending: string()
      .matches(/(yes|no)/, { excludeEmptyString: true })
      .required(wording.requiredError),
    isBringingGuest: boolean(),
    guestName: string().when("isBringingGuest", {
      is: true,
      then: (a) => a.required(wording.requiredError),
      otherwise: (a) => a.notRequired(),
    }),
    isBringingChildren: boolean(),
    numberOfChildren: number().when("isBringingChildren", {
      is: true,
      then: (a) =>
        a
          .min(1, wording.numberChildrenMinError)
          .max(4, wording.numberChildrenMaxError)
          .integer(wording.numberChildrenIntegerError)
          .required(wording.requiredError),
      otherwise: (a) => a.notRequired(),
    }),
    otherNotes: string().notRequired(),
  });

  interface Response extends InferType<typeof responseSchema> {}

  const defaultValues: Response = {
    name: undefined,
    isAttending: undefined,
    isBringingGuest: false,
    guestName: "",
    isBringingChildren: false,
    numberOfChildren: 0,
    otherNotes: "",
  };

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const attendingWording = {
    yes: wording.submitIsAttending,
    no: wording.submitIsNotAttending,
    other: wording.submit,
  };
  return (
    <div
      className={classNames("RsvpForm", {
        "is-visible": state === FormState.OPEN,
        "is-submitted": state === FormState.SUBMITTED,
      })}
    >
      <CloseButton className="RsvpForm__closeButton" onClick={handleCancel} />
      <div className="RsvpForm__inner">
        <h2 className="RsvpForm__title">{wording.title}</h2>
        <hr />
        <div className="RsvpForm__description">
          {wording.description.split("\n").map((part, i) => (
            <p key={i}>{part}</p>
          ))}
          <hr />
        </div>
        <Formik
          initialValues={defaultValues}
          validationSchema={responseSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSuccess();
            setSubmitting(false);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "rsvp", ...values }),
            })
              .then((a) => console.log({ a }))
              .catch((e) => alert({ e }));
          }}
        >
          {(formik) => (
            <Form
              name="rsvp"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="rsvp" />
              <FormLine id="name">
                <label>
                  {wording.yourNameLabel}
                  <Field type="text" name="name" />
                </label>
                {<FormError name="name" formik={formik} />}
              </FormLine>
              <FormLine id="isAttending">
                <p id="will-be-attending-label">{wording.isAttendingLabel}</p>
                <div role="group" aria-labelledby="will-be-attending-label">
                  <label>
                    <Field type="radio" name="isAttending" value="no" />
                    {wording.isAttendingNoLabel}
                  </label>
                  <label>
                    <Field type="radio" name="isAttending" value="yes" />
                    {wording.isAttendingYesLabel}
                  </label>
                </div>
                <FormError name="isAttending" formik={formik} />
              </FormLine>
              <FormLine id="bringingGuest">
                <label>
                  {wording.bringingGuestLabel}
                  <Field type="checkbox" name="isBringingGuest" />
                </label>
                <FormLine id="guest" hidden={!formik.values.isBringingGuest}>
                  <label>
                    {wording.guestNameLabel}
                    <Field type="text" name="guestName" />
                  </label>
                  <FormError name="guestName" formik={formik} />
                </FormLine>
                {~!formik.values.isBringingGuest && <FormSpacer />}
              </FormLine>

              <FormLine id="bringingChildren">
                <label>
                  {wording.bringingChildrenLabel}
                  <Field type="checkbox" name="isBringingChildren" />
                </label>

                <FormLine
                  id="numberOfChildren"
                  hidden={!formik.values.isBringingChildren}
                >
                  <label>
                    {wording.howManyChildrenLabel}
                    <Field type="number" name="numberOfChildren" />
                  </label>
                  <FormError name="numberOfChildren" formik={formik} />
                </FormLine>
                {!formik.values.isBringingChildren && <FormSpacer />}
              </FormLine>

              <FormLine id="otherNotes">
                <label>
                  {wording.otherNotesLabel}
                  <Field type="text" as="textarea" name="otherNotes" />
                </label>
              </FormLine>
              <div data-netlify-recaptcha="true"></div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="button--alt button--block button--large button--spaced"
              >
                {formik.values.isAttending
                  ? attendingWording[formik.values.isAttending]
                  : attendingWording["other"]}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RsvpForm;
