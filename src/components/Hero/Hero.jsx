import Hibiscus01 from "../../images/hibiscus-1c.png";
import Hibiscus02 from "../../images/hibiscus-2c.png";
import "./Hero.scss";

const Hero = ({ i18n: { bride, and, groom, date, location } = {} }) => (
  <section className="Hero">
    <div className="Hero__imageContainer Hero__imageContainer--glow">
      <img src={Hibiscus01} className="Hero__image--lowerLeft Hero__image" />
      <img src={Hibiscus02} className="Hero__image--upperRight Hero__image" />
    </div>
    <div className="Hero__imageContainer">
      <img src={Hibiscus01} className="Hero__image--lowerLeft Hero__image" />
      <img src={Hibiscus02} className="Hero__image--upperRight Hero__image" />
    </div>
    <div className="Hero__inner">
      <h1>
        {bride} <span>{and}</span> {groom}
      </h1>
      <h2>{date}</h2>
      <h3>{location}</h3>
    </div>
  </section>
);

export default Hero;
