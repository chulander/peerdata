import { useEffect, useState } from "react";
import { request } from "graphql-request";
import { readOnlyContentApi } from "../services/endpoint";

// this returns an array
export function useQueries<T>(query: string, name: string): null | T[] {
  const [data, setData] = useState<T[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const _data = (await request(readOnlyContentApi, query)) as {
          [name: string]: T[];
        };

        setData(_data[name]);
      } catch (e) {
        console.error("what is error", e);
      }
    };

    fetchData();
  }, []);
  return data;
}

export default useQueries;
