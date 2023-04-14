import { System } from "./HeadlessCMS";

export interface Link extends System {
  label: string;
  slug: string;
  href: string;
  theme: "PRIMARY" | "SECONDARY" | "ALTERNATE";
}
