import { System } from "./HeadlessCMS";
import { Image } from "./Image";

export interface Container<T> extends System {
  title: string;
  blocks: T[];
  image: null | Image;
}
