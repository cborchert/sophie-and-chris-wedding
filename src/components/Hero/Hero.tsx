import { useState, useEffect } from "react";
import classNames from "classnames";

import RsvpForm, {
  RSVP_FORM_OPENED_EVENT,
  RSVP_FORM_SUBMISSION_DATE,
  RSVP_FORM_SUBMITTED_EVENT,
} from "../RsvpForm/RsvpForm";
import ConfettiProvider from "../ConfettiProvider/ConfettiProvider";
import useMounted from "../../utils/useMounted";

import Hibiscus01 from "../../images/hibiscus-1c.png";
import Hibiscus02 from "../../images/hibiscus-2c.png";

import "./Hero.scss";
import { trigger, useListener } from "../../utils/events";

type PropTypes = {
  wording: i18nHeroWording;
  rsvpWording: i18nRsvpWording;
};

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
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  /**
   * Fetch the form submission date from the localstorage
   */
  useEffect(() => {
    const prevFormSubmissionDate = window.localStorage.getItem(
      RSVP_FORM_SUBMISSION_DATE
    );
    setFormSubmitted(!!prevFormSubmissionDate);
  }, []);

  /**
   * When the RSVP form is submitted, set the formSubmitted to true
   */
  useListener(RSVP_FORM_SUBMITTED_EVENT, () => {
    setFormSubmitted(true);
  });

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
          <div className="Hero__title">
            <h1>
              {nameOne} <span>{and}</span> {nameTwo}
            </h1>
            <h2>{date}</h2>
            <h3>{location}</h3>
          </div>
          <button
            onClick={() => {
              trigger(RSVP_FORM_OPENED_EVENT);
            }}
            className={classNames("button--large", {
              "Hero__rsvpButton--hidden": !rsvpEnabled,
              "button--text": rsvpEnabled && formSubmitted,
            })}
            disabled={!rsvpEnabled}
          >
            {formSubmitted ? rsvpPreviouslySubmittedCta : rsvpCta}
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
