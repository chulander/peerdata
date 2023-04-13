import { Image } from "./Image";

export type Container<T> = {
  __typename: string;
  id: string;
  title: string;
  blocks: T[];
  image: null | Image;
};
