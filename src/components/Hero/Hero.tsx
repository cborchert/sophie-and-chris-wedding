import { useState } from "react";

import RsvpForm, { FormState } from "../RsvpForm/RsvpForm";
import Hibiscus01 from "../../images/hibiscus-1c.png";
import Hibiscus02 from "../../images/hibiscus-2c.png";

import "./Hero.scss";
import { NotificationType, sendNotification } from "../../utils/notifications";

type PropTypes = {
  wording: i18nHeroWording;
  rsvpWording: i18nRsvpWording;
};

const Hero = ({
  wording: { nameOne, and, nameTwo, date, location, rsvpCta },
  rsvpWording,
}: PropTypes) => {
  const [formState, setFormState] = useState<FormState>(FormState.CLOSED);

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
            className="button--large button--spaced"
          >
            {rsvpCta}
          </button>
          <button
            onClick={() => {
              sendNotification(Date.now().toString(), {
                type:
                  Math.random() < 0.33
                    ? NotificationType.SUCCESS
                    : Math.random() < 0.5
                    ? NotificationType.ERROR
                    : NotificationType.INFO,
              });
            }}
          >
            SEND IT
          </button>
        </div>
      </section>
      <RsvpForm
        state={formState}
        handleCancel={() => setFormState(FormState.CLOSED)}
        handleSuccess={() => setFormState(FormState.SUBMITTED)}
        wording={rsvpWording}
      />
    </>
  );
};

export default Hero;
