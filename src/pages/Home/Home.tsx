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

// const Images = {
//   "home-1": "../../assets/images/image-home-1.jpg",
// };

export interface Home {
  className?: string;
  roles: DataEconomyRoles["items"];
  values: ValueProps["items"];
}
export function Home({ className, roles, values }: Home) {
  return (
    <section className={className}>
      <Hero />
      <SplitImages className="mt-20 h-3/4" left={Home1} right={Home2} />
      <LeftText
        className="mt-40"
        category="Data Revolution"
        mainContent="Data is experiencing exponential growth, having doubled in just the past two years. Yet, despite the ever-increasing demand for diverse and extensive datasets, there is currently no direct avenue for investing in data."
        subContent="Peer Data aims to revolutionize how data operates worldwide. By providing expertise, standards, and cutting-edge technology in infrastructure and rails for the data asset class."
      />
      <DataEconomyRoles
        items={roles}
        className="mt-48"
        title="What is your role in the data economy?"
        onClick={() => console.log("click")}
      />
      <SplitImages className="mt-20 h-3/4" left={Home3} right={Home4} />
      <LeftText
        className="mt-40"
        category="Mission"
        title="Our mission is to assist organizations in transforming their data into valuable assets"
        mainContent="Peer Data is borne out of the observation that data and AI are powering nearly everything we do today. Data, as the vital commodity powering the AI and digital world, holds immense value and potential"
        subContent="Our team has witnessed the transformative journey of data, form its role in supporting human decision-making to empowering machines toke informed choices in financial markets and everyday life on a global scale."
      >
        <Button
          className="w-full lg:w-[65%] xl:w-[45%]"
          id="find-out-more"
          isPrimary={false}
          label="Find out more"
          onClick={() => console.log("click")}
        />
      </LeftText>
      <hr className="my-16 h-0.5 bg-brand-dark-blue lg:my-36" />
      <ValueProps
        items={values}
        className="mt-48"
        title="We aim to unlock maxium value and amplify reach by:"
        onClick={() => console.log("click")}
      />
      <JoinContainer />
      <HomeAboutPeerData />
    </section>
  );
}
