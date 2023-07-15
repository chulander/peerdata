import { Hero } from "../../containers/Hero";
import PersonaContainer from "../../containers/PersonaContainer";
// import CategoryContainer from "../../containers/CategoryContainer";
import HomeAboutPeerData from "../../containers/HomeAboutPeerData";
import JoinContainer from "../../containers/JoinContainer";
import { Images } from "../../containers/Images";
import { LeftText } from "../../containers/LeftText";
import { DataEconomyRoles } from "../../containers/DataEconomyRoles";
import Home1 from "../../assets/images/image-home-1.jpg";
import Home2 from "../../assets/images/image-home-2.jpg";
import Home3 from "../../assets/images/image-home-3.jpg";
import Home4 from "../../assets/images/image-home-4.jpg";
import { Anchor } from "../../components/Anchor";

// const Images = {
//   "home-1": "../../assets/images/image-home-1.jpg",
// };

export interface Home {
  className?: string;
  roles: DataEconomyRoles["roles"];
}
export function Home({ className, roles }: Home) {
  return (
    <section className={className}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <Hero />
      {/* <PersonaContainer /> */}
      <Images className="mt-20 h-3/4" left={Home1} right={Home2} />
      <LeftText
        className="mt-40"
        title="Data Revolution"
        mainContent="Data is experiencing exponential growth, having doubled in just the past two years. Yet, despite the ever-increasing demand for diverse and extensive datasets, there is currently no direct avenue for investing in data."
        subContent="Peer Data aims to revolutionize how data operates worldwide. By providing expertise, standards, and cutting-edge technology in infrastructure and rails for the data asset class."
      />
      <DataEconomyRoles
        roles={roles}
        className="mt-48"
        title="What is your role in the data economy?"
      />
      <Images className="mt-20 h-3/4" left={Home3} right={Home4} />
      <LeftText
        className="mt-40"
        title="Data Revolution"
        mainContent="Data is experiencing exponential growth, having doubled in just the past two years. Yet, despite the ever-increasing demand for diverse and extensive datasets, there is currently no direct avenue for investing in data."
        subContent="Peer Data aims to revolutionize how data operates worldwide. By providing expertise, standards, and cutting-edge technology in infrastructure and rails for the data asset class."
      />
      <JoinContainer />
      <HomeAboutPeerData />
    </section>
  );
}
