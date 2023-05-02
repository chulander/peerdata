import { Hero } from "../../containers/Hero";
import PersonaContainer from "../../containers/PersonaContainer";
import CategoryContainer from "../../containers/CategoryContainer";
import AboutNewContainer from "../../containers/AboutContainer";
import JoinContainer from "../../containers/JoinContainer";

export function Home() {
  return (
    <section>
      <Hero />
      <PersonaContainer />
      <CategoryContainer />
      <AboutNewContainer />
      <JoinContainer />
    </section>
  );
}
