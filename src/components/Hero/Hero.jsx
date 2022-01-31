import "./Hero.scss";

const Hero = ({ i18n: { bride, and, groom, date, location } = {} }) => (
  <section className="Hero">
    <h1>
      {bride} <span>{and}</span> {groom}
    </h1>
    <h2>{date}</h2>
    <h3>{location}</h3>
  </section>
);

export default Hero;
