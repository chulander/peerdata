import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { readOnlyContentApi } from "../services/endpoint";
import { Hero } from "../types/Hero";

const bannersQuery = gql`
  query getHeroes {
    hero(where: {slug:"home-hero"}) {
    id
    title
    subtitle
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
export function userHeros(): null | Hero {
  const [banner, setPersonas] = useState<Hero | null>(null);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const { hero: _heroes } = (await request(
          readOnlyContentApi,
          bannersQuery
        )) as { hero: Hero };

        console.log("what is data here", _heroes);
        setPersonas(_heroes);
      } catch (e) {
        console.error("what is error", e);
      }
    };

    fetchBanners();
  }, []);
  return banner;
}

export default userHeros;
