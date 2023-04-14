import { gql } from "graphql-request";

export const dataOwnerPageQuery = gql`
  query DataOwnerQuery {
    page(where: { slug: "data-owners" }) {
      id
      sections {
        __typename
        ... on Hero {
          __typename
          slug
          id
          title
          description
          links {
            id
            label
            href
            theme
          }
          image {
            id
            url
          }
        }
        ... on Banner {
          id
          description
          slug
          title
          image {
            id
            url
          }
        }
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
