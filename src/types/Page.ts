import { Category } from "./Category";
import { Container } from "./Container";
import { Hero } from "./Hero";
import { Persona } from "./Persona";
import { Image } from "./Image";
import { System } from "./HeadlessCMS";
import { Banner } from "./Banner";

export interface Page extends System {
  sections: Array<
    Hero | Container<Persona> | Container<Category> | Container<Image> | Banner
  >;
}
