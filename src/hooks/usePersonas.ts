import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { readOnlyContentApi } from "../services/endpoint";

const personasQuery = gql`
  query getPersonas {
    personas {
      id
      name
      description
      slug
      image {
        id
        url
      }
    }
  }
`;
export function usePersonas() {
  console.log("what is endpoint", readOnlyContentApi);
  const [personas, setPersonas] = useState(null);
  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const { personas: _personas } = await request(
          "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg6lt2pz0w8r01tfcx8z0tja/master",
          personasQuery
        );

        console.log("what is data here", _personas);
        setPersonas(_personas);
      } catch (e) {
        console.error("what is error", e);
      }
    };

    fetchPersonas();
  }, []);
  return personas;
}

export default usePersonas;
