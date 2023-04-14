import { System, Asset } from "./HeadlessCMS";
import { Link } from "./Link";

export interface Hero extends System {
  title: string;
  description: string;
  image: Asset;
  links: Link[];
  slug: string;
}
