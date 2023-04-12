import { System, Asset } from "./HeadlessCMS";
import { Button } from "./Button";

export interface Banner extends System {
  title: string;
  subtitle: string;
  image: Asset;
  buttons: Button[];
}
