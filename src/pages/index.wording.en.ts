const i18n: i18nWording = {
  hero: {
    nameOne: "Chris",
    and: "&",
    nameTwo: "Sophie",
    date: "August 13th, 2022",
    location: "Jouy-le-Moutier, France",
    rsvpCta: "RSVP",
    rsvpPreviouslySubmittedCta:
      "You have already RSVP'd. Click here to send a new response.",
  },
  rsvp: {
    title: "RSVP",
    description:
      "You are cordially invited to our wedding on August 13th, 2022 in Jouy-le-Moutier, France.\nPlease fill out the form below to RSVP by May 30th, 2022",
    yourNameLabel: "Your first and last name",
    isAttendingLabel: "Will you be attending?",
    isAttendingYesLabel: "Yes",
    isAttendingNoLabel: "No",
    bringingGuestLabel: "Will you be bringing your partner or a guest?",
    guestNameLabel: "Your guest's first and last name",
    bringingChildrenLabel: "Will you be bringing children?",
    howManyChildrenLabel: "How many children will you be bringing?",
    otherNotesLabel: "Anything else you want to let us know?",
    requiredError: "This field is required",
    numberChildrenMinError: "Please enter a number greater than ${min}",
    numberChildrenMaxError: "Please enter a number less than ${max}",
    numberChildrenIntegerError: "Please only bring whole children!",
    submit: "Submit",
    submitIsAttending: "I will be attending",
    submitIsNotAttending: "With regrets",
    yesResponseNotification:
      "Thanks for responding! We look forward to seeing you!",
    noResponseNotification: "Thanks for responding. We'll miss seeing you!",
    errorNotification: "Something went wrong. Please try again.",
  },
  program: {
    title: "Program",
    subheader: undefined,
    recommendedAttireLabel: undefined,
    recommendedAttireValue: undefined,
    recommendedAttireNote: `The ceremony and dinner will take
    place in an outdoor space, with an indoor space available during the
    cocktail hour and soirée. Prepare for temperatures ranging from 25°c (80°f)
    in the early evening to 15°c (60°f) at night.`,
    timeline: {
      vows: {
        time: "6pm",
        event: "Exchange of vows",
      },
      cocktail: {
        time: "7pm",
        event: "Cocktail hour",
      },
      dinner: {
        time: "8pm",
        event: "Dinner",
      },
      party: {
        time: "10pm",
        event: "Party",
      },
    },
  },
  location: {
    title: "Location",
    description:
      "The wedding and celebration will take place at our residence at:",
    address: ["9 Rue du Pré aux Moines", "98520 Jouy-le-Moutier", "France"],
    directionsCtaLink:
      "https://www.google.com/maps/dir//9+Rue+du+Pr%C3%A9+aux+Moines,+95280+Jouy-le-Moutier/@49.0238617,2.038378,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47e6f4b52fa2a969:0x71daccd08afde288!2m2!1d2.0405667!2d49.0238617!3e0",
    directionsCtaLabel: "Get directions",
    directionsTitle: "Getting to Jouy-le-Moutier",
    directionsContentLines: [
      `Jouy-le-Moutier is a village in the northwestern Parisian suburbs, located
      about 18 miles (28 km) from the center of Paris, and 30 miles (48 km) from
      Charles de Gaulle Airport.`,
      `We recommend driving in or taking an Uber from your hotel or the closest
      station.`,
      `The village is <strong>not</strong> directly served by the Paris rail
      network (Métro, RER, or suburban rails). The closest station is the
      Neuville-Université station on Paris RER line A coming from Paris'
      Saint-Lazare station (2.5mi / 4km from our residence).`,
    ],
    parkingTitle: "Parking",
    parkingDescription: `The Rue du Pré aux Moines is relatively narrow and parking will be
    limited. Please try to arrange a carpool with other invitees, or a
    rideshare (e.g. Uber) to get to the house.`,
    additionalParkingTitle: "Larger parking areas nearby include:",
    additionalParkingLocations: [
      `2 Rue des Blanchards, 95280 Jouy-le-Moutier (180m)`,
      `20 Grande Rue, 95280 Jouy-le-Moutier .5 miles (750m)`,
      `355 Rue des Prés, 95490 Vauréal .5 miles (850m)`,
    ],
    additionalParkingNote: `Additional parking may be available on the Rue de Vauréal which runs
    parallel to Rue du Pré aux Moines.`,
    map: {
      homeLatLng: { lat: 49.02399679949075, lng: 2.0405397516862323 },
      parkingLatLngs: [
        { lat: 49.022695261434166, lng: 2.0404968375717956 },
        { lat: 49.01873646771615, lng: 2.0447580101624134 },
        { lat: 49.02316769897054, lng: 2.0405202587326206 },
        { lat: 49.030880832815036, lng: 2.035298992039408 },
      ],
    },
  },
  accommodations: {
    title: "Accommodations",
    description: `Hotels, bed &amp; breakfasts (sometimes called <i>chambres d'hôtes</i> or <i>gîtes</i>), vacation rentals, and other lodgings are available in the area through the normal booking websites. Larger nearby towns such as Cergy (10 minutes by car) provide a wide selection of hotels and AirBnBs suitable for most budgets.`,
  },
  pageTitle: "Chris and Sophie are getting married!",
};

export default i18n;
