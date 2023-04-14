import { gql } from "graphql-request";

export const aboutPageQuery = gql`
  query AboutUsQuery {
    page(where: { slug: "about" }) {
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
