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
      {timeline.map(({ time, event }) => (
        <li>
          {time} {event}
        </li>
      ))}
    </ul>
    <p>
      <strong>{recommendedAttireLabel}</strong> {recommendedAttireValue}
    </p>
    <p>{recommendedAttireNote}</p>
  </section>
);

export default Program;
