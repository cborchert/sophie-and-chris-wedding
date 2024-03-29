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
  yourEmailLabel: string;
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
  yesResponseNotification: string;
  noResponseNotification: string;
  errorNotification: string;
};

type TimelineItem = {
  time: string;
  event: string;
};

declare type i18nProgramWording = {
  title: string;
  recommendedAttireNote: string;
  timeline: {
    vows: TimelineItem;
    party: TimelineItem;
    cocktail: TimelineItem;
    dinner: TimelineItem;
  };
};

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
  map: {
    homeLatLng: LatLng;
    parkingLatLngs: LatLng[];
  };
};

declare type i18nAccommodationsWording = {
  title: string;
  description: string;
};

declare type i18nGiftsWording = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  dividerThemeWhite?: boolean;
};

declare type MenuItems = Array<{
  label?: string;
  href?: string;
  target?: string;
  openRsvpForm?: boolean;
}>;

declare type i18nWording = {
  hero: i18nHeroWording;
  rsvp: i18nRsvpWording;
  program: i18nProgramWording;
  location: i18nLocationWording;
  accommodations?: i18nAccommodationsWording;
  gifts: i18nGiftsWording;
  pageTitle: string;
  menuItems: MenuItems;
};
