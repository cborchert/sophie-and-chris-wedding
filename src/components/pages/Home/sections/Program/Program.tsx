import Text from "../../../../atoms/Text/Text";
import WaveDivider from "../../../../atoms/WaveDivider/WaveDivider";

import "./Program.scss";

const Program = ({
  wording: {
    title,
    subheader,
    recommendedAttireLabel,
    recommendedAttireValue,
    recommendedAttireNote,
    timeline = [],
  },
}: {
  wording: i18nProgramWording;
}) => (
  <>
    <WaveDivider className="theme-2" />
    <section className="Program section theme-2">
      <div className="Program__inner">
        <h2>{title}</h2>
        <Text>{subheader}</Text>
        <ul>
          <Text as="li">
            {timeline.map(({ time, event }) => `${time} ${event}`)}
          </Text>
        </ul>
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
