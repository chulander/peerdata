import { classNames } from "../utils";
import { InputButton } from "./InputButton";

export interface Hero {
  className?: string;
}
export function Hero({ className }: Hero) {
  return (
    <div className={classNames("relative pt-24", !className ? "" : className)}>
      <div className="mx-auto my-8 lg:flex lg:flex-col lg:gap-x-10">
        <div className=" xs:flex xs:flex-col xs:items-center sm:block">
          <h1 className="header-2 font-medium mt-10 text-black">
            Powering and digitizing
            <br />
            data economy of the future
          </h1>
          <p className="text-[1.7rem] mt-5 text-black font-normal tracking-tighter">
            Peer Data enables you to turn data into assets.
          </p>
          <InputButton
            className="mt-7 h-16 w-full lg:w-[55%] xl:w-[45%]"
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
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
