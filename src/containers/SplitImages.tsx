import { classNames } from "../utils";

export interface SplitImages {
  className?: string;
  left: string;
  right: string;
}
export function SplitImages({ className, left, right }: SplitImages) {
  return (
    <section
      className={classNames(
        "flex w-full flex-col gap-y-16 lg:flex-row lg:justify-between lg:gap-x-16 lg:gap-y-0",
        !className ? "" : className
      )}
    >
      <img
        alt="home-1"
        className="max-h-screen lg:mb-36 lg:h-full lg:w-10 lg:basis-1/2"
        src={left}
      ></img>
      <img
        alt="home-2"
        className="max-h-screen lg:mt-48 lg:h-full lg:w-10 lg:basis-1/2"
        src={right}
      ></img>
    </section>
  );
}
