import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { object, string, boolean, number, InferType } from "yup";
import classNames from "classnames";

import FormSpacer from "../../../../atoms/forms/FormSpacer/FormSpacer";
import FormLine from "../../../../atoms/forms/FormLine/FormLine";
import FormError from "../../../../atoms/forms/FormError/FormError";
import CloseButton from "../../../../atoms/CloseButton/CloseButton";
import Divider from "../../../../atoms/Divider/Divider";
import Text from "../../../../atoms/Text/Text";
import Icon from "../../../../atoms/Icon/Icon";

import { CONFETTI_CUSTOM_EVENT } from "../../../../atoms/ConfettiProvider/ConfettiProvider";
import {
  sendNotification,
  NotificationType,
} from "../../../../../utils/notifications";
import { trigger, useListener } from "../../../../../utils/events";

import { ReactComponent as RsvpIcon } from "../../../../../images/icons/noun-stationery-2064427.svg";

import "./RsvpForm.scss";

export enum FormState {
  CLOSED,
  OPEN,
  SUBMITTED,
}

export const RSVP_FORM_SUBMISSION_DATE = "formSubmissionDate";
export const RSVP_FORM_OPENED_EVENT = "RSVP_FORM_OPENED";
export const RSVP_FORM_SUBMITTED_EVENT = "RSVP_FORM_SUBMITTED";

type PropTypes = {
  state?: FormState;
  handleCancel?: () => void;
  wording: i18nRsvpWording;
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const getFormikValues = (wording) => {
  const responseSchema = object({
    name: string().required(wording.requiredError),
    email: string().email(),
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
    name: "",
    email: "",
    isAttending: "",
    isBringingGuest: false,
    guestName: "",
    isBringingChildren: false,
    numberOfChildren: 0,
    otherNotes: "",
  };

  return {
    responseSchema,
    defaultValues,
  };
};

const RsvpForm = ({ wording }: PropTypes) => {
  const [state, setState] = useState<FormState>(FormState.CLOSED);

  const { responseSchema, defaultValues } = getFormikValues(wording);

  useListener(RSVP_FORM_OPENED_EVENT, () => {
    setState(FormState.OPEN);
  });

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
      id="rsvp"
    >
      <div className="RsvpForm__closeButton">
        <CloseButton
          onClick={() => {
            setState(FormState.CLOSED);
          }}
        />
      </div>
      <div className="RsvpForm__inner">
        <h2 className="RsvpForm__title">{wording.title}</h2>
        <Divider>
          <Icon Img={RsvpIcon} />
        </Divider>
        <div className="RsvpForm__description">
          <Text>{wording.description}</Text>
        </div>
        <Formik
          initialValues={defaultValues}
          validationSchema={responseSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // don't send nonsense
            const validatedValues = {
              ...values,
            };
            if (!validatedValues.isBringingChildren) {
              validatedValues.numberOfChildren = 0;
            }
            if (!validatedValues.isBringingGuest) {
              validatedValues.guestName = "";
            }

            const submissionDate = Date.now().toString();
            window.localStorage.setItem(
              RSVP_FORM_SUBMISSION_DATE,
              submissionDate
            );

            trigger(RSVP_FORM_SUBMITTED_EVENT);
            setState(FormState.SUBMITTED);
            setSubmitting(false);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "rsvp", ...validatedValues }),
            })
              .then(({ ok, status }) => {
                if (!ok || status !== 200) {
                  throw new Error("Failed submitting rsvp form");
                }
                if (values.isAttending === "yes") {
                  trigger(CONFETTI_CUSTOM_EVENT);
                  sendNotification(wording.yesResponseNotification, {
                    type: NotificationType.SUCCESS,
                  });
                } else {
                  sendNotification(wording.noResponseNotification, {
                    type: NotificationType.INFO,
                  });
                }
                resetForm();
              })
              .catch((e) => {
                sendNotification(wording.errorNotification, {
                  type: NotificationType.ERROR,
                });
              });
          }}
        >
          {(formik) => (
            <Form
              name="rsvp"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="phone"
            >
              <input type="hidden" name="form-name" value="rsvp" />
              <FormLine hidden>
                <label>
                  Phone
                  <Field type="string" name="phone" />
                </label>
              </FormLine>
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
                  <Field type="checkbox" name="isBringingGuest" />
                  {wording.bringingGuestLabel}
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
                  <Field type="checkbox" name="isBringingChildren" />
                  {wording.bringingChildrenLabel}
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

              <FormLine id="email">
                <label>
                  {wording.yourEmailLabel}
                  <Field type="email" name="email" />
                </label>
              </FormLine>

              <FormLine id="otherNotes">
                <label>
                  {wording.otherNotesLabel}
                  <Field type="text" as="textarea" name="otherNotes" />
                </label>
              </FormLine>
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
