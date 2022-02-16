declare type i18nHeroWording = {
  nameOne: string;
  and: string;
  nameTwo: string;
  date: string;
  location: string;
  rsvpCta: string;
  rsvpPreviouslySubmittedCta: string;
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

declare type i18nProgramWording = {};

type LatLng = {
  lat: number;
  lng: number;
};

declare type i18nLocationWording = {
  title: string;
  description: string;
  address: string[];
  directionsCtaLink: string;
  directionsCtaLabel: string;
  directionsTitle: string;
  directionsContentLines: string[];
  parkingTitle: string;
  parkingDescription: string;
  additionalParkingTitle: string;
  additionalParkingLocations: string[];
  additionalParkingNote: string;
  map: {
    homeLatLng: LatLng;
    parkingLatLngs: LatLng[];
  };
};

declare type i18nAccommodationsWording = {
  title: string;
  description: string;
};

declare type i18nWording = {
  hero: i18nHeroWording;
  rsvp: i18nRsvpWording;
  program: i18nProgramWording;
  location: i18nLocationWording;
  accommodations: i18nAccommodationsWording;
  pageTitle: string;
};

// declare module "*.png" {
//   const value: any;
//   export default value;
// }
