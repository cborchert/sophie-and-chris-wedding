import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Program from "../Program/Program";
import Location from "../Location/Location";
import Lodging from "../Lodging/Lodging";

import "./Home.scss";

const Home = ({ i18n }) => (
  <main className="Home">
    <Hero i18n={i18n.hero} />
    <Intro i18n={i18n.intro} />
    <Location i18={i18n.location} />
    <Program i18n={i18n.program} />
    <Lodging i18n={i18n.lodging} />
  </main>
);
export default Home;
