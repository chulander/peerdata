import Anchor from "../components/Anchor";
// import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { classNames } from "../utils";

import { externalRoutes } from "../config";

export interface AlternateHero {
  className?: string;
}
export function AlternateHero({ className }: AlternateHero) {
  return (
    <div
      className={classNames(
        "relative bg-brand-light-background bg-square pt-24",
        !className ? "" : className
      )}
    >
      <div className="mx-auto my-8 pb-36 lg:flex lg:flex-col lg:gap-x-10">
        <div className=" xs:flex xs:flex-col xs:items-center sm:block">
          <h1 className="header-2 mt-10 font-medium text-black lg:w-full">
            Everyone is in the data business, they just don&apos;t know it yet
          </h1>
          <p className="mt-8 text-[1.6rem] leading-7 tracking-tight text-black xl:w-3/5">
            At PEER DATA, we are passionate about helping businesses unlock the
            full value of their data and transform how data operates in the
            market.
          </p>
          <section className="mt-12 flex flex-col items-center gap-y-10 lg:flex-row lg:gap-y-0">
            <LinkButton
              className="w-48 text-[1.15rem] font-normal"
              to={externalRoutes["waitlist"].href}
            >
              Learn more
            </LinkButton>
            <Anchor
              className="lg:ml-10 text-xl tracking-tight lg:text-[1.15rem]"
              to={externalRoutes["careers"].href}
              target="_blank"
              id="join-our-team"
            >
              <span className="font-thin">Join our team</span>
            </Anchor>
          </section>
          {/* <InputButton
            className="mt-12 h-16 w-full lg:w-[55%] xl:w-[45%]"
            id="hero-signup"
            placeholder="Your company email"
            hasIcon
            label="Sign up"
            onChange={() => {
              console.log("test");
            }}
            onClick={() => {
              console.log("test");
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AlternateHero;
