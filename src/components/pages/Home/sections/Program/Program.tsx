import Text from "../../../../atoms/Text/Text";
import WaveSection from "../../../../atoms/WaveSection/WaveSection";

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
  <WaveSection className="theme-2">
    <section className="Program section">
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
    </section>
  </WaveSection>
);

export default Program;
