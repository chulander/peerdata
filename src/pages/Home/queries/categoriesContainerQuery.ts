import { gql } from "graphql-request";

export const categoriesContainerQuery = gql`
  query getCategoriesContainer {
    container(where: { slug: "categories-container" }) {
      id
      title
      blocks {
        __typename
        ... on Category {
          id
          title
          description
          slug
          link {
            href
            label
          }
          image {
            url
          }
        }
      }
    }
  }
`;
