import { gql } from "graphql-request";

export const productsPageQuery = gql`
  query Products {
    page(where: { slug: "products" }) {
      id
      sections {
        __typename
        ... on Container {
          __typename
          id
          title
          image {
            id
            url
          }
          blocks {
            __typename
            ... on CategoryCard {
              id
              __typename
              title
              caption
              description
              image {
                id
                url
              }
            }
          }
        }
      }
    }
  }
`;
