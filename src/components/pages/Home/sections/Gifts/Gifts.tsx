import Text from "../../../../atoms/Text/Text";
import Divider from "../../../../atoms/Divider/Divider";
import Icon from "../../../../atoms/Icon/Icon";

import { ReactComponent as GiftsIcon } from "../../../../../images/icons/noun-wedding-gifts-2049099.svg";

import "./Gifts.scss";
import WaveDivider from "../../../../atoms/WaveDivider/WaveDivider";

type PropTypes = {
  wording: i18nGiftsWording;
};
const Accommodations = ({ wording }: PropTypes) => (
  <>
    <WaveDivider theme={1} className="theme-3" />
    <section className="Gifts section" id="registry">
      <div className="Gifts__inner">
        <h2>{wording?.title}</h2>
        <Divider>
          <Icon Img={GiftsIcon} />
        </Divider>
        <Text className="Gifts__text">{wording?.description}</Text>
        <div className="Gifts__cta">
          <a
            className="button button--accent-alt button--large"
            href={wording?.ctaLink}
            target="_blank"
          >
            {wording?.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Accommodations;
