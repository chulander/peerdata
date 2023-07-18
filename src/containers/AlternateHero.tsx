import Anchor from "../components/Anchor";
import { Button } from "../components/Button";
import { classNames } from "../utils";
import { InputButton } from "./InputButton";

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
      <div className="mx-auto my-8 lg:flex lg:flex-col lg:gap-x-10">
        <div className=" xs:flex xs:flex-col xs:items-center sm:block">
          <h1 className="header-2 mt-10 font-medium text-black xl:max-w-[73%]">
            Our mission is to assist organizations in transforming their data
            into valuable assets
          </h1>
          <p className="mt-8 text-[1.6rem] tracking-tighter text-black">
            We aim to unlock maximum value and amplify reach by
          </p>
          <section className="mt-12 flex items-center">
            <Button
              className="text-4xl"
              id="learn-more"
              label="Learn more"
              onClick={() => console.log("test")}
            />
            <Anchor
              className="ml-8 text-[1.5rem] tracking-tight"
              to="https://app.jazz.co/app/v2/job"
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
