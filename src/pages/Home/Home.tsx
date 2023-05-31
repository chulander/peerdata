import { Hero } from "../../containers/Hero";
import PersonaContainer from "../../containers/PersonaContainer";
import CategoryContainer from "../../containers/CategoryContainer";
import HomeAboutPeerData from "../../containers/HomeAboutPeerData";
import JoinContainer from "../../containers/JoinContainer";

export function Home() {
  return (
    <section>
      <Hero />
      <PersonaContainer />
      <CategoryContainer />
      <HomeAboutPeerData />
      <JoinContainer />
    </section>
  );
}
