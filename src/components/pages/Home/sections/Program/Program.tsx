import Icon from "../../../../atoms/Icon/Icon";
import Text from "../../../../atoms/Text/Text";
import WaveDivider from "../../../../atoms/WaveDivider/WaveDivider";

import weddingSvg from "../../../../../images/icons/noun-wedding-bands-2049096.svg";
import cheersSvg from "../../../../../images/icons/noun-cheers-2053097.svg";
import partySvg from "../../../../../images/icons/noun-party-1098631.svg";
import dinnerSvg from "../../../../../images/icons/noun-dinner-1758231.svg";

import "./Program.scss";

const Program = ({
  wording: {
    title,
    subheader,
    recommendedAttireLabel,
    recommendedAttireValue,
    recommendedAttireNote,
    timeline,
  },
}: {
  wording: i18nProgramWording;
}) => (
  <>
    <WaveDivider className="theme-2" />
    <section className="Program section theme-2">
      <div className="Program__inner">
        <h2>{title}</h2>
        <Text className="Program__tagline">{subheader}</Text>
        <div className="Program__timeline">
          {[
            { ...timeline.vows, icon: weddingSvg },
            { ...timeline.cocktail, icon: cheersSvg },
            { ...timeline.dinner, icon: dinnerSvg },
            { ...timeline.party, icon: partySvg },
          ].map(({ time, event, icon }) => (
            <div className="Program__timelineItem">
              <div className="Program__timelineTime">{time}</div>
              <div className="Program__timelineIcon">
                <Icon src={icon} contained size="small" />
              </div>
              <div className="Program__timelineEvent">{event}</div>
            </div>
          ))}
        </div>
        {recommendedAttireLabel && recommendedAttireValue ? (
          <p>
            <strong>{recommendedAttireLabel}</strong> {recommendedAttireValue}
          </p>
        ) : null}
        <p>{recommendedAttireNote}</p>
      </div>
    </section>
  </>
);

export default Program;
