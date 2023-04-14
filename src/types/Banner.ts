import { System } from "./HeadlessCMS";
import { Image } from "./Image";

export interface Banner extends System {
  title: string;
  description: string;
  slug: string;
  image: Image;
}
