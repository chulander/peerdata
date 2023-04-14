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
      }
    }
  }
`;
