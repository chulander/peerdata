import { gql } from "graphql-request";

export const heroQuery = gql`
  query getHeroes {
    hero(where: { slug: "data-owners" }) {
      id
      title
      description
      slug
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
  }
`;
