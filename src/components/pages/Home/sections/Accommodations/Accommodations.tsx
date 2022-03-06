import Text from "../../../../atoms/Text/Text";
import Divider from "../../../../atoms/Divider/Divider";
import Icon from "../../../../atoms/Icon/Icon";

import { ReactComponent as AccommodationsIcon } from "../../../../../images/icons/noun-bed-4263914.svg";

import "./Accommodations.scss";

type PropTypes = {
  wording: i18nAccommodationsWording;
};
const Accommodations = ({ wording }: PropTypes) => (
  <section className="Accommodations section">
    <h2>{wording.title}</h2>
    <Divider>
      <Icon Img={AccommodationsIcon} />
    </Divider>
    <Text>{wording.description}</Text>
  </section>
);

export default Accommodations;
