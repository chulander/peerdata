import { System } from "./HeadlessCMS";
import { Image } from "./Image";

export interface CategoryCard extends System {
  title: string;
  caption: string;
  description: string;
  slug: string;
  image: Image;
}
