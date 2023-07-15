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
        "flex w-full items-center justify-between gap-x-12",
        !className ? "" : className
      )}
    >
      <img
        alt="home-1"
        className="mb-36 aspect-square h-full w-10 basis-1/2"
        src={left}
      ></img>
      <img
        alt="home-2"
        className="mt-48 h-full w-10 basis-1/2"
        src={right}
      ></img>
    </section>
  );
}
