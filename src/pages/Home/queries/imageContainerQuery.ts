import { gql } from "graphql-request";

export const imageContainerQuery = gql`
  query getImageContainer {
    container(where: { slug: "image-container" }) {
      id
      title
      image {
        id
        url
      }
    }
  }
`;
