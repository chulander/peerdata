import { HeroContainerWithoutImage } from "../../containers/HeroContainerWithoutImage";
import ImageContent from "../../components/ImageContent";
import { ProductCategorySection } from "../../layouts/ProductCategorySection";
import ProductCategoryDetailCard from "../../components/ProductCategoryDetailCard";

const discoverCategories: Array<ProductCategoryDetailCard> = [
  {
    name: "Discover Name",
    caption: "Discover Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Discover Other Name",
    caption: "Discover Other Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
];
const amplifyCategories: Array<ProductCategoryDetailCard> = [
  {
    name: "Amplify 1",
    caption: "Amplify Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Amplify 2",
    caption: "Amplify Caption 2",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
];
import useQuery from "../../hooks/useQuery";
import { heroQuery } from "./queries/heroQuery";
import { Hero } from "../../types/Hero";
import { Page } from "../../types/Page";
import { dataOwnerPageQuery } from "./queries/dataOwnerPageQuery";
import { useState } from "react";
import { Banner } from "../../types/Banner";

export function DataOwner() {
  // const hero = useQuery<Hero>(heroQuery, "hero");
  const dataOwnersPage = useQuery<Page>(dataOwnerPageQuery, "page");
  console.log("page", dataOwnersPage);

  let i = 0;
  return !dataOwnersPage ? null : (
    <div className="space-y-4">
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
            <ImageContent
              key={sectionType["id"]}
              alt={sectionType["title"]}
              direction={direction}
              description={sectionType["description"]}
              image={sectionType["image"]["url"]}
              name={sectionType["title"]}
            />
          );
        }
      })}
      <section className="mx-10">
        <ProductCategorySection
          name="Discover"
          categoryDetails={discoverCategories}
        />
        <ProductCategorySection
          name="Amplify"
          categoryDetails={amplifyCategories}
        />
      </section>
    </div>
  );
}

export default DataOwner;
