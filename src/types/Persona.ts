import { Link } from "./Link";

export type Persona = {
  __typename: string;
  id: string;
  name: string;
  description: string;
  slug: string;
  image: {
    id: string;
    url: string;
  };
  link: Link;
};
