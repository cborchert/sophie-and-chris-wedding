import { RSVP_FORM_OPENED_EVENT } from "../components/pages/Home/sections/RsvpForm/RsvpForm";
import { trigger } from "../utils/events";

const i18n: i18nWording = {
  hero: {
    nameOne: "Sophie",
    and: "&",
    nameTwo: "Chris",
    date: "13 Août, 2022",
    location: "Jouy-le-Moutier",
    rsvpCta: "Confirmez votre présence",
    rsvpPreviouslySubmittedCta:
      "Vous avez déjà confirmé votre présence. Cliquez ici pour modifier votre réponse.",
  },
  rsvp: {
    title: "Confirmation de Présence",
    description:
      "C'est avec joie que nous vous convions à notre mariage le 13 août 2022 à Jouy-le-Moutier.\nMerci de bien vouloir confirmer votre présence en remplissant le formulaire ci-dessous avant le 30 mai 2022.",
    yourNameLabel: "Votre nom et prénom",
    isAttendingLabel: "Serez vous présent ?",
    isAttendingYesLabel: "Oui",
    isAttendingNoLabel: "Non",
    bringingGuestLabel: "Amenerez-vous un invité ?",
    guestNameLabel: "Le nom et prénom de votre invité",
    bringingChildrenLabel: "Amenerez-vous des enfants ?",
    howManyChildrenLabel: "Combien d'enfants ?",
    otherNotesLabel: "Précisions supplémentaires",
    requiredError: "Ce champ est obligatoire",
    numberChildrenMinError: "Merci d'entrer un chiffre supérieur à ${min}",
    numberChildrenMaxError: "Merci d'entrer un chiffre inférieur à ${max}",
    numberChildrenIntegerError: "Veuillez amener des enfants entiers !",
    submit: "Envoyer",
    submitIsAttending: "Je serai présent(e)",
    submitIsNotAttending: "Je ne serai malheureusement pas présent(e)",
    yesResponseNotification: "Merci de votre réponse !",
    noResponseNotification: "Merci de votre réponse !",
    errorNotification:
      "Une erreur s'est produite. Merci de réessayer plus tard.",
  },
  program: {
    title: "Programme",
    recommendedAttireNote: `La cérémonie et dîner auront à l'exterieur dans notre jardin. Nous vous suggérons d'amener un gilet pour le soir et des chaussures plates pour les femmes.`,
    timeline: {
      vows: {
        time: "18h",
        event: "Cérémonie laïque",
      },
      cocktail: {
        time: "19h",
        event: "Vin d'honneur",
      },
      dinner: {
        time: "20h",
        event: "Dîner",
      },
      party: {
        time: "22h",
        event: "Soirée",
      },
    },
  },
  location: {
    title: "Adresse",
    description:
      "La cérémonie, dîner, et soirée auront lieu à notre domicile au",
    address: ["9 Rue du Pré aux Moines", "98520 Jouy-le-Moutier"],
    directionsCtaLink:
      "https://www.google.com/maps/dir//9+Rue+du+Pr%C3%A9+aux+Moines,+95280+Jouy-le-Moutier/@49.0238617,2.038378,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47e6f4b52fa2a969:0x71daccd08afde288!2m2!1d2.0405667!2d49.0238617!3e0",
    directionsCtaLabel: "Planifiez votre itinéraire",
    directionsTitle: "",
    directionsContentLines: [],
    parkingTitle: "Parking",
    parkingDescription: `La Rue du Pré aux Moines est une impasse étroite et les places de parking seront limitées. Essayez de vous garer dans les rues aux alentours ou de privilégier le covoiturage.`,
    map: {
      homeLatLng: { lat: 49.02399679949075, lng: 2.0405397516862323 },
      parkingLatLngs: [
        { lat: 49.022695261434166, lng: 2.0404968375717956 },
        { lat: 49.01873646771615, lng: 2.0447580101624134 },
        { lat: 49.030880832815036, lng: 2.035298992039408 },
      ],
    },
  },
  gifts: {
    title: "Liste de mariage",
    description: `Nous n'avons pas de liste de mariage. À la place, nous vous invitons à contribuer à notre cagnotte de voyage de noces.`,
    ctaLabel: "Contribuer",
    ctaLink: "https://www.leetchi.com/c/mariage-sophie-et-chris",
    dividerThemeWhite: true,
  },
  menuItems: [
    {
      label: "Confirmer votre présence",
      href: "#rsvp",
      openRsvpForm: true,
    },
    { href: "#program", label: "Programme" },
    { href: "#location", label: "Adresse" },
    { href: "#registry", label: "Liste de mariage" },
    { href: "http://www.chrisandsophie.wedding", label: "ENGLISH" },
  ],
  pageTitle: "Sophie et Chris se marient !",
};

export default i18n;
