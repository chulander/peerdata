import { InputButton } from "./InputButton";

export function Hero() {
  return (
    <div className="">
      <div className="relative isolate pt-14">
        <div className="mx-auto my-8 lg:flex lg:items-center lg:gap-x-10">
          <div className=" xs:flex xs:flex-col xs:items-center sm:block md:max-w-2xl lg:mx-0 lg:max-w-7xl lg:flex-auto">
            <h1 className="mt-10 text-8xl font-normal tracking-tighter text-black md:max-w-2xl lg:max-w-6xl ">
              Powering and digitizing
              <br />
              data economy of the future
            </h1>
            <p className="mt-4 text-3xl/9 font-normal tracking-tighter text-black">
              Peer Data enables you to turn data into assets.
            </p>
            <InputButton
              className="mt-6 h-16 w-2/3"
              id="hero-signup"
              placeholder="Your company email"
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
    </div>
  );
}

export default Hero;
