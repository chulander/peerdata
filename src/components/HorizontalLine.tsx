import { classNames } from "../utils";

export interface HorizontalLine {
  className?: string;
}
export function HorizontalLine({ className }: HorizontalLine) {
  return (
    <hr
      className={classNames(
        "mx-5 h-0.5 bg-brand-dark-blue",
        !className ? "" : className
      )}
    />
  );
}
