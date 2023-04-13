import { gql } from "graphql-request";

export const homePageQuery = gql`
  query getHomePageQuery {
    page(where: { slug: "home" }) {
      id
      sections {
        __typename
        ... on Hero {
          __typename
          id
          title
          description
          links {
            id
            label
            href
          }
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
            ... on Category {
              __typename
              id
              name
              description
              slug
              link {
                href
                label
              }
              image {
                id
                url
              }
            }
            ... on Persona {
              __typename
              id
              name
              description
              slug
              link {
                href
                label
              }
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
