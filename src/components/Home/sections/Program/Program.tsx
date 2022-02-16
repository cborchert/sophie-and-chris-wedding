import Text from "../../../atoms/Text/Text";
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
  <section className="Program">
    <h2>{title}</h2>
    <p>{subheader}</p>
    <ul>
      <Text as="li">
        {timeline.map(({ time, event }) => `${time} ${event}`)}
      </Text>
    </ul>
    <p>
      <strong>{recommendedAttireLabel}</strong> {recommendedAttireValue}
    </p>
    <p>{recommendedAttireNote}</p>
  </section>
);

export default Program;
