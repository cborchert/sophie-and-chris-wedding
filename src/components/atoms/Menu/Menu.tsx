import { useState } from "react";
import classNames from "classnames";

import BurgerButton from "../BurgerButton/BurgerButton";
import CloseButton from "../CloseButton/CloseButton";

import { trigger } from "../../../utils/events";
import { RSVP_FORM_OPENED_EVENT } from "../../pages/Home/sections/RsvpForm/RsvpForm";

import "./Menu.scss";

const Menu = ({ items = [] }: { items: MenuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {items?.length && (
        <div className="Menu__toggle">
          <BurgerButton theme="intermediate" onClick={() => setIsOpen(true)} />
        </div>
      )}
      {items?.length && (
        <nav className={classNames("Menu", { "is-open": isOpen })}>
          <CloseButton
            light
            onClick={() => setIsOpen(false)}
            className="Menu__closeButton"
          />
          <ul>
            {items.map(({ label, href, target, openRsvpForm }) => (
              <li key={label}>
                <a
                  href={href}
                  target={target}
                  onClick={(e) => {
                    if (openRsvpForm) {
                      e.preventDefault();
                      trigger(RSVP_FORM_OPENED_EVENT);
                    }
                    setIsOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
