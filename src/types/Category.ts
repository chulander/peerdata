import { System } from "./HeadlessCMS";
import { Image } from "./Image";
import { Link } from "./Link";

export interface Category extends System {
  title: string;
  description: string;
  slug: string;
  image: Image;
  link: Link;
}
