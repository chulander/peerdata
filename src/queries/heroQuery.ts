import { gql } from "graphql-request";

export const heroQuery = gql`
  query getHeroes {
    hero(where: { slug: "home-hero" }) {
      id
      title
      description
      slug
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
  }
`;
