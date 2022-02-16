import "./Accommodations.scss";

type PropTypes = {
  wording: i18nAccommodationsWording;
};
const Accommodations = ({ wording }: PropTypes) => (
  <section className="Accommodations">
    <h1>{wording.title}</h1>
    <p>{wording.description}</p>
  </section>
);

export default Accommodations;
