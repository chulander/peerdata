import { gql } from "graphql-request";

export const personasContainerQuery = gql`
  query getPersonasContainer {
    container(where: {slug: "personas-container"}) {
    id
    title
    blocks {
      __typename
      ... on Persona {
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
