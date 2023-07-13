import { classNames } from "../utils";

export interface Images {
  className?: string;
  left: string;
  right: string;
}
export function Images({ className, left, right }: Images) {
  return (
    <section
      className={classNames(
        "flex w-full max-w-full items-center justify-between gap-x-10",
        !className ? "" : className
      )}
    >
      <img className="h-full w-full mb-36" src={left}></img>
      <img className="h-full w-full mt-36" src={right}></img>
    </section>
  );
}
