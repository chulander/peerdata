import { Persona } from "./Persona";

export type Container<T extends Persona> = {
  id: string;
  title: string;
  blocks: T[];
};
