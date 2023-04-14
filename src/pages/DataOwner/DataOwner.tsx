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

export function DataOwner() {
  const hero = useQuery<Hero>(heroQuery, "hero");

  console.log("hero", hero);
  return !hero ? null : (
    <div className="space-y-4">
      <HeroContainerWithoutImage
        title={hero.title}
        description={hero.description}
        links={hero.links}
      />
      <ImageContent
        alt="Data Taxonomy"
        direction="left"
        name="Data Taxonomy"
        description="PeerData taxonomy is a framework for organizing and classifying different types of data based on their characteristics and properties. The goal of data taxonomy is to create a consistent and standardized way of categorizing data that can be used across different systems and organizations."
        img="https://media.istockphoto.com/id/465789195/photo/taxonomy.jpg?s=612x612&w=is&k=20&c=QdPCtZFTj3kUjr2kEjfBDINTBmrqQUz2WDQcFtlWJHQ="
      />
      <ImageContent
        alt="Data Registry"
        name="Data Registry"
        description="PeerData registry is a powerful tool that enables organizations to manage their data assets more effectively. With the data registry, users can easily search, discover, and access a wide range of data assets, including structured and unstructured data, time-series data, geospatial data, and more."
        img="https://media.istockphoto.com/id/641134666/photo/archive-with-folders.jpg?s=612x612&w=is&k=20&c=Qe6NilzFSRK2SrSAHagU9n8YjqrEwCyexkxMtpbyvJI="
      />
      <ImageContent
        alt="Data Ratings"
        direction="left"
        name="Data Ratings"
        description="PeerData ratings can be a valuable tool for organizations that want to ensure the quality and reliability of their data assets. By assigning ratings to different datasets, organizations can quickly identify which data assets are the most trustworthy and accurate, and which ones may require further scrutiny or validation."
        img="https://media.istockphoto.com/id/1398473177/photo/questionnaire-with-checkboxes-filling-survey-form-online-answer-questions.jpg?s=612x612&w=is&k=20&c=VXK_vEHPzUUnPcj_DbnE_sGZxAVSymchoqJNWt1Mg44="
      />
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
