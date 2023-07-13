import { Hero } from "../../containers/Hero";
import PersonaContainer from "../../containers/PersonaContainer";
// import CategoryContainer from "../../containers/CategoryContainer";
import HomeAboutPeerData from "../../containers/HomeAboutPeerData";
import JoinContainer from "../../containers/JoinContainer";
import { Images } from "../../containers/Images";
import { LeftText } from "../../containers/LeftText";

export function Home() {
  return (
    <section>
      <Hero />
      {/* <PersonaContainer /> */}
      <Images
        className="h-3/4 px-8"
        left="https://media.graphassets.com/ZR4pkoNwRvyFCOVbVpeH"
        right="https://media.graphassets.com/z6MgBBtHS2rwKEIrAQoQ"
      />
      <LeftText
        className="px-8"
        title="Data Revolution"
        content="Data is experiencing exponential growth, having doubled in just the past two years. Yet, despite the ever-increasing demand for diverse and extensive datasets, there is currently no direct avenue for investing in data."
        subContent="Peer Data aims to revolutionize how data operates worldwide. By providing expertise, standards, and cutting-edge technology in infrastructure and rils for the data asset class."
      />
      <JoinContainer />
      <HomeAboutPeerData />
    </section>
  );
}
