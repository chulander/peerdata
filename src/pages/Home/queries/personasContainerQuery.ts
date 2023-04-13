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
