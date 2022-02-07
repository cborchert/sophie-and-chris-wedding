declare type i18nHeroWording = {
  nameOne: string;
  and: string;
  nameTwo: string;
  date: string;
  location: string;
  rsvpCta: string;
};

declare type i18nRsvpWording = {
  title: string;
  description: string;
  yourNameLabel: string;
  isAttendingLabel: string;
  isAttendingYesLabel: string;
  isAttendingNoLabel: string;
  bringingGuestLabel: string;
  guestNameLabel: string;
  bringingChildrenLabel: string;
  howManyChildrenLabel: string;
  otherNotesLabel: string;
  requiredError: string;
  numberChildrenMinError: string;
  numberChildrenMaxError: string;
  numberChildrenIntegerError: string;
  submit: string;
  submitIsAttending: string;
  submitIsNotAttending: string;
};

declare type i18nWording = {
  hero: i18nHeroWording;
  rsvp: i18nRsvpWording;
  pageTitle: string;
};

declare module "*.png" {
  const value: any;
  export default value;
}