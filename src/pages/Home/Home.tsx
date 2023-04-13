import HeroContainer from "../../containers/HeroContainer";
import PersonasContainer from "../../containers/PersonasContainer";
import { Hero, Hero as HeroType } from "../../types/Hero";
import useQuery from "../../hooks/useQuery";
import { heroQuery } from "./queries/heroQuery";
import CategoriesContainer from "../../containers/CategoriesContainer";
import { ImageContainer } from "../../containers/ImageContainer";
import { Image } from "../../types/Image";
import { Page } from "../../types/Page";
import { homePageQuery } from "./queries/homePageQuery";
import { Container } from "../../types/Container";
import { Persona } from "../../types/Persona";
import { Category } from "../../types/Category";

export function Home() {
  const homePage = useQuery<Page>(homePageQuery, "page");

  return !homePage ? null : (
    <div className="space-y-4">
      {homePage.sections.map((section) => {
        if (section.__typename === "Hero") {
          const sectionType = section as HeroType;
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
        if (section.__typename === "Container") {
          const sectionType = section as Container<Persona | Category | Image>;
          if (!sectionType.blocks.length) {
            return (
              <ImageContainer
                key={sectionType["id"]}
                id={sectionType["id"]}
                title={sectionType["title"]}
                image={sectionType["image"]}
              />
            );
          } else {
            if (sectionType.blocks[0].__typename === "Persona") {
              const _section = sectionType as Container<Persona>;
              return (
                <PersonasContainer
                  key={section["id"]}
                  title={_section["title"]}
                  blocks={_section["blocks"]}
                />
              );
            }

            if (sectionType.blocks[0].__typename === "Category") {
              const _section = sectionType as Container<Category>;

              return (
                <CategoriesContainer
                  key={section["id"]}
                  title={_section["title"]}
                  blocks={_section["blocks"]}
                />
              );
            }
          }
        }
      })}
    </div>
  );
}
