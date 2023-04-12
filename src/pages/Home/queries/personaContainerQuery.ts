import { gql } from "graphql-request";

export const personaContainerQuery = gql`
  query getPersonaContainer {
    container(where: {slug: "personas-container"}) {
    id
    title
    blocks {
      __typename
      ... on Persona {
        id
        name
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
