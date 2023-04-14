import { Link } from "./Link";
import { System } from "./HeadlessCMS";
import { Image } from "./Image";

export interface Persona extends System {
  title: string;
  description: string;
  slug: string;
  image: Image;
  link: Link;
}
