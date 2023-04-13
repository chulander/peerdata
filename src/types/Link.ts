import { System } from "./HeadlessCMS";

export interface Link extends System {
  __typename: string;
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
