import { CategoryNewCard } from "../components/CategoryNewCard";

const cards: CategoryNewCard[] = [
  {
    id: "discover",
    name: "Discover",
    img: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=2048x2048&w=is&k=20&c=RJqfVGXDYkWmwIohM7hsaRY5Lz6n_I8UIcftlKMnioM=",
    alt: "image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "assess",
    name: "Assess",
    img: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=2048x2048&w=is&k=20&c=RJqfVGXDYkWmwIohM7hsaRY5Lz6n_I8UIcftlKMnioM=",
    alt: "image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "trade",
    name: "Trade",
    img: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=2048x2048&w=is&k=20&c=RJqfVGXDYkWmwIohM7hsaRY5Lz6n_I8UIcftlKMnioM=",
    alt: "image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "amplify",
    name: "Amplify",
    img: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=2048x2048&w=is&k=20&c=RJqfVGXDYkWmwIohM7hsaRY5Lz6n_I8UIcftlKMnioM=",
    alt: "image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function CategoryContainer() {
  return (
    <>
      <div className="mb-12 bg-white">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              D.A.T.A Categories
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-brand-500">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {cards.map((card) => (
              <CategoryNewCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-8 mt-10 border-0 border-brand-blue px-6 pt-10 sm:mt-16 sm:pt-16 lg:block lg:border-t lg:px-8"></div>
    </>
  );
}

export default CategoryContainer;
