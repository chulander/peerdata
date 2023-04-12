import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { readOnlyContentApi } from "../services/endpoint";
import { Banner } from "../types/Banner";

const bannersQuery = gql`
  query getBanners {
    banners {
      id
      title
      subtitle
      buttons {
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
export function useBanners(): null | Banner[] {
  console.log("what is endpoint", readOnlyContentApi);
  const [banner, setPersonas] = useState<Banner[] | null>(null);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const { banners: _banners } = (await request(
          "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg6lt2pz0w8r01tfcx8z0tja/master",
          bannersQuery
        )) as { banners: Banner[] };

        console.log("what is data here", _banners);
        setPersonas(_banners);
      } catch (e) {
        console.error("what is error", e);
      }
    };

    fetchBanners();
  }, []);
  return banner;
}

export default useBanners;
