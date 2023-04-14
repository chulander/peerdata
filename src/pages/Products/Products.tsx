import ProductStory from "../../containers/ProductStory";
import ProductCategoryDetailCard from "../../components/ProductCategoryDetailCard";
import { ProductCategorySection } from "../../layouts/ProductCategorySection";
import { productsPageQuery } from "./queries/getProductsPageQuery";
import useQuery from "../../hooks/useQuery";
import { Page } from "../../types/Page";
import { Container } from "../../types/Container";
import { CategoryCard } from "../../types/CategoryCard";
import { Image } from "../../types/Image";

export function Products() {
  const productPage = useQuery<Page>(productsPageQuery, "page");

  return !productPage ? null : (
    <div className="flex flex-col space-y-8">
      {productPage.sections.map((section) => {
        if (section.__typename === "Container") {
          const sectionType = section as Container<CategoryCard | Image>;
          if (!sectionType.blocks.length) {
            return (
              <ProductStory
                key={sectionType["id"]}
                id={sectionType["id"]}
                title={sectionType["title"]}
                image={section["image"]}
              />
            );
          }
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

// <ProductStory />
// <section className="mx-10">
//   <ProductCategorySection
//     name="Discover"
//     categoryDetails={discoverCategories}
//   />
//   <ProductCategorySection
//     name="Assess"
//     categoryDetails={assessCategories}
//   />
//   <ProductCategorySection
//     name="Trade"
//     categoryDetails={tradeCategories}
//   />
//   <ProductCategorySection
//     name="Amplify"
//     categoryDetails={amplifyCategories}
//   />
// </section>
// );
export default Products;
