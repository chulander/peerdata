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
        "flex lg:gap-y-12 flex-col w-full lg:flex-row lg:items-center lg:justify-between lg:gap-x-16",
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
