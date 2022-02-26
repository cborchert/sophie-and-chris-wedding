import Text from "../../../atoms/Text/Text";
import "./Accommodations.scss";

type PropTypes = {
  wording: i18nAccommodationsWording;
};
const Accommodations = ({ wording }: PropTypes) => (
  <section className="Accommodations section">
    <h2>{wording.title}</h2>
    <Text>{wording.description}</Text>
  </section>
);

export default Accommodations;
