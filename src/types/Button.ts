import { System } from "./HeadlessCMS";

export interface Button extends System {
  label: string;
  slug: string;
  href: string;
  theme: ButtonTheme;
}

enum ButtonTheme {
  "PRIMARY",
  "SECONDARY",
  "ALTERNATE",
}
