import { classNames } from "../utils";

export interface StackedImages {
  className?: string;
  left: string;
  right: string;
}
export function StackedImages({ className, left, right }: StackedImages) {
  return (
    <section
      className={classNames(
        "relative flex w-full flex-col gap-y-12 lg:flex-row lg:items-center lg:justify-between lg:gap-x-16",
        !className ? "" : className
      )}
    >
      <img
        alt="home-1"
        className="absolute z-10 w-1/2 lg:mb-36"
        src={left}
      ></img>
      <img alt="home-2" className="absolute z-20 w-1/2 top-0 right-1/4" src={right}></img>
    </section>
  );
}
