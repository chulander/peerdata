import { System, Asset } from "./HeadlessCMS";
import { Link } from "./Link";

export interface Hero extends System {
  __typename: string;
  title: string;
  description: string;
  image: Asset;
  links: Link[];
  slug: string;
}
