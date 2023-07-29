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
          <p className="mt-8 text-[1.6rem] tracking-tighter text-black lg:max-w-2xl">
            At PEER DATA, we are passionate about helping businesses unlock the
            full value of their data and transform how data operates in the
            market.
          </p>
          <section className="mt-12 flex items-center">
            <LinkButton
              className="w-48 text-[1.15rem] font-normal"
              to={externalRoutes["waitlist"].href}
            >
              Learn more
            </LinkButton>
            <Anchor
              className="ml-10 text-[1.15rem] tracking-tight"
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
