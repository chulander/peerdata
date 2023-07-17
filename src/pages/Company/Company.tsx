import { Hero } from "../../containers/Hero";
// import CategoryContainer from "../../containers/CategoryContainer";
import HomeAboutPeerData from "../../containers/HomeAboutPeerData";
import JoinContainer from "../../containers/JoinContainer";
import { SplitImages } from "../../containers/SplitImages";
import { LeftText } from "../../containers/LeftText";
import { DataEconomyRoles } from "../../containers/DataEconomyRoles";
import Home1 from "../../assets/images/image-home-1.jpg";
import Home2 from "../../assets/images/image-home-2.jpg";
import Home3 from "../../assets/images/image-home-3.jpg";
import Home4 from "../../assets/images/image-home-4.jpg";
import { Button } from "../../components/Button";
import { ValueProps } from "../../containers/ValueProps";
import Signup from "../../containers/SignUp";
import AlternateHero from "../../containers/AlternateHero";

// const Images = {
//   "home-1": "../../assets/images/image-home-1.jpg",
// };

export interface Company {
  className?: string;
  roles: DataEconomyRoles["items"];
  values: ValueProps["items"];
}
export function Company({ className, roles, values }: Company) {
  return (
    <section className={className}>
      <Hero className="px-12" />
      <AlternateHero />
    </section>
  );
}
