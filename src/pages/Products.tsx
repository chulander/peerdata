import ProductStory from "../containers/ProductStory";
import ProductCategoryDetailCard from "../components/ProductCategoryDetailCard";
import { ProductCategorySection } from "../layouts/ProductCategorySection";

const discoverCategories: Array<ProductCategoryDetailCard> = [
  {
    name: "Discover Name",
    caption: "Discover Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Discover Name 2",
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
const tradeCategories: Array<ProductCategoryDetailCard> = [
  {
    name: "Trade Name",
    caption: "Trade Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Trade Name 2",
    caption: "Trade Caption 2",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Trade Name 3",
    caption: "Trade Caption 3",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Trade Name 4",
    caption: "Trade Caption 4",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
];
const assessCategories: Array<ProductCategoryDetailCard> = [
  {
    name: "Assess Name",
    caption: "Assess Caption",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Assess Name 2",
    caption: "Assess Caption 2",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Assess Name 3",
    caption: "Assess Caption 3",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
  {
    name: "Assess Name 4",
    caption: "Assess Caption 4",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1147405001/photo/searching-on-internet-concept.jpg?s=1024x1024&w=is&k=20&c=h7R_Qdx6lbZFuGY2VwVyZmfqe3kQN7Pmfhvmus7d_oI=",
  },
];

export default function Products() {
  return (
    <div className="flex flex-col space-y-8">
      <ProductStory />
      <section className="mx-10">
        <ProductCategorySection
          name="Discover"
          categoryDetails={discoverCategories}
        />
        <ProductCategorySection
          name="Assess"
          categoryDetails={assessCategories}
        />
        <ProductCategorySection
          name="Trade"
          categoryDetails={tradeCategories}
        />
        <ProductCategorySection
          name="Amplify"
          categoryDetails={amplifyCategories}
        />
      </section>
    </div>
  );
}
