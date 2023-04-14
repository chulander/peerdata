import { HeroContainerWithoutImage } from "../../containers/HeroContainerWithoutImage";
import BannerContainer from "../../containers/BannerContainer";
import { ProductCategorySection } from "../../layouts/ProductCategorySection";
import { Container } from "../../types/Container";
import { CategoryCard } from "../../types/CategoryCard";
import { Image } from "../../types/Image";

import useQuery from "../../hooks/useQuery";
import { Hero } from "../../types/Hero";
import { Page } from "../../types/Page";
import { dataOwnerPageQuery } from "./queries/dataOwnerPageQuery";
import { Banner } from "../../types/Banner";

export function DataOwner() {
  const dataOwnersPage = useQuery<Page>(dataOwnerPageQuery, "page");
  console.log("page", dataOwnersPage);

  let i = 0;
  return !dataOwnersPage ? null : (
    <div className="flex flex-col space-y-4">
      {dataOwnersPage.sections.map((section) => {
        if (section.__typename === "Hero") {
          const sectionType = section as Hero;
          return (
            <HeroContainerWithoutImage
              key={section["id"]}
              title={sectionType["title"]}
              description={sectionType["description"]}
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

        if (section.__typename === "Container") {
          const sectionType = section as Container<CategoryCard | Image>;
          if (
            sectionType.blocks.length &&
            sectionType.blocks[0]["__typename"] === "CategoryCard"
          ) {
            return (
              <ProductCategorySection
                key={sectionType["id"]}
                title={sectionType["title"]}
                cards={sectionType["blocks"] as CategoryCard[]}
              />
            );
          }
        }
      })}
    </div>
  );
}

export default DataOwner;
