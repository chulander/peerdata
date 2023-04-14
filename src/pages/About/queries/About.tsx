import BannerContainer from "../../../containers/BannerContainer";
import useQuery from "../../../hooks/useQuery";
import { aboutPageQuery } from "./aboutPageQuery";
import { Page } from "../../../types/Page";
import HeroContainer from "../../../containers/HeroContainer";
import { Hero } from "../../../types/Hero";
import { Banner } from "../../../types/Banner";

export function About() {
  const homePage = useQuery<Page>(aboutPageQuery, "page");

  let i = 0;
  return !homePage ? null : (
    <div className="space-y-4">
      {homePage.sections.map((section) => {
        if (section.__typename === "Hero") {
          const sectionType = section as Hero;
          return (
            <HeroContainer
              key={section["id"]}
              title={sectionType["title"]}
              description={sectionType["description"]}
              image={sectionType["image"]}
              links={sectionType["links"]}
            />
          );
        }

        if (section.__typename === "Banner") {
          const sectionType = section as Banner;
          const direction = i % 2 === 0 ? "left" : "right";
          i = i + 1;
          return (
            <BannerContainer
              key={sectionType["id"]}
              alt={sectionType["title"]}
              direction={direction}
              description={sectionType["description"]}
              image={sectionType["image"]}
              title={sectionType["title"]}
            />
          );
        }
      })}
    </div>
  );
}

export default About;
