import { useState, useEffect } from "react";

import RsvpForm, { FormState } from "../RsvpForm/RsvpForm";
import ConfettiProvider from "../ConfettiProvider/ConfettiProvider";

import Hibiscus01 from "../../images/hibiscus-1c.png";
import Hibiscus02 from "../../images/hibiscus-2c.png";

import "./Hero.scss";
import useMounted from "../../utils/useMounted";
import classNames from "classnames";

type PropTypes = {
  wording: i18nHeroWording;
  rsvpWording: i18nRsvpWording;
};

const FORM_SUBMISSION_DATE = "formSubmissionDate";

const Hero = ({
  wording: {
    nameOne,
    and,
    nameTwo,
    date,
    location,
    rsvpCta,
    rsvpPreviouslySubmittedCta,
  },
  rsvpWording,
}: PropTypes) => {
  const [formState, setFormState] = useState<FormState>(FormState.CLOSED);
  const [formSubmissionDate, setFormSubmissionDate] = useState<string>();

  /**
   * Fetch the form submission date from the localstorage
   */
  useEffect(() => {
    const prevFormSubmissionDate =
      window.localStorage.getItem(FORM_SUBMISSION_DATE);
    console;
    setFormSubmissionDate(prevFormSubmissionDate);
  }, []);

  const rsvpEnabled = useMounted();

  return (
    <>
      <section className="Hero">
        <div className="Hero__imageContainer Hero__imageContainer--glow">
          <img
            src={Hibiscus01}
            className="Hero__image--lowerLeft Hero__image"
          />
          <img
            src={Hibiscus02}
            className="Hero__image--upperRight Hero__image"
          />
        </div>
        <div className="Hero__imageContainer">
          <img
            src={Hibiscus01}
            className="Hero__image--lowerLeft Hero__image"
          />
          <img
            src={Hibiscus02}
            className="Hero__image--upperRight Hero__image"
          />
        </div>
        <div className="Hero__inner">
          <h1>
            {nameOne} <span>{and}</span> {nameTwo}
          </h1>
          <h2>{date}</h2>
          <h3>{location}</h3>
          <button
            onClick={() => setFormState(FormState.OPEN)}
            className={classNames("button--spaced", "button--large", {
              "Hero__rsvpButton--hidden": !rsvpEnabled,
              "button--text": rsvpEnabled && formSubmissionDate,
            })}
            disabled={!rsvpEnabled}
          >
            {formSubmissionDate ? rsvpPreviouslySubmittedCta : rsvpCta}
          </button>
        </div>
      </section>
      <ConfettiProvider />
      <RsvpForm
        state={formState}
        handleCancel={() => setFormState(FormState.CLOSED)}
        handleSuccess={() => {
          const submissionDate = Date.now().toString();
          window.localStorage.setItem(FORM_SUBMISSION_DATE, submissionDate);
          setFormSubmissionDate(submissionDate);
          setFormState(FormState.SUBMITTED);
        }}
        wording={rsvpWording}
      />
    </>
  );
};

export default Hero;
