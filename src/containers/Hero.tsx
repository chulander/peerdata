import { Button } from "../components/Button";
import { InputButton } from "./InputButton";

export function Hero() {
  return (
    <div className="">
      <div className="relative isolate pt-14">
        <div className="mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className=" xs:flex xs:flex-col xs:items-center sm:block md:max-w-2xl lg:mx-0 lg:max-w-7xl lg:flex-auto">
            <h1 className="mt-10 text-8xl font-medium tracking-tighter text-black md:max-w-2xl lg:max-w-6xl ">
              Powering and digitizing
              <br />
              data economy of the future
            </h1>
            <p className="mt-4 text-3xl/9 font-normal tracking-tighter text-black">
              Peer Data enables you to turn data into assets.
            </p>
            <InputButton
              className="mt-6 w-2/3 h-20"
              id="hero-signup"
              placeholder="Your company email"
              label="Sign up"
              onChange={() => {}}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
