import { Category } from "./Category";
import { Container } from "./Container";
import { Hero } from "./Hero";
import { Persona } from "./Persona";
import { Image } from "./Image";

export type Page = {
  id: string;
  sections: Array<
    Hero | Container<Persona> | Container<Category> | Container<Image>
  >;
};
