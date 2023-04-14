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
            theme
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
              title
              description
              slug
              link {
                id
                href
                label
                theme
              }
              image {
                id
                url
              }
            }
            ... on Persona {
              __typename
              id
              title
              description
              slug
              link {
                id
                href
                label
                theme
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
