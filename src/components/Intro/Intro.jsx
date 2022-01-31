import "./Intro.scss";

const Intro = ({ i18n: { title, introText, rsvp } = {} }) => (
  <section className="Intro">
    <h1>{title}</h1>
    {introText
      ? introText.split("\n").map((line, i) => <p key={i}>{line}</p>)
      : null}
    <button>{rsvp}</button>
  </section>
);

export default Intro;
