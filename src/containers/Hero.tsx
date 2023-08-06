import { classNames } from "../utils";
// import { InputButton } from "./InputButton";

export interface Hero {
  className?: string;
}
export function Hero({ className }: Hero) {
  return (
    <div className={classNames("relative pt-24", !className ? "" : className)}>
      <div className="mx-auto my-16 lg:my-8 lg:flex lg:flex-col lg:gap-x-10">
        <div className=" xs:flex xs:flex-col xs:items-center sm:block">
          <h1 className="header-2 mt-10 font-medium text-black">
            Powering and digitizing
            <br />
            the data economy of the future
          </h1>
          <p className="mt-5 text-[1.6rem] font-normal leading-7 tracking-tight text-black">
            Turn data into assets. Monetize and capitalize your data quickly and
            easily.
          </p>
          {/* <InputButton
            className="mt-7 h-16 w-full text-[1.35rem] lg:w-[59%] xl:w-[39%]"
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
      <iframe
        className="mt-7 h-16 w-full text-[1.35rem] lg:w-[59%] xl:w-[30%]"
        title="Sign up for the PEER DATA Newsletter"
        src="https://embeds.beehiiv.com/53970974-f548-44fe-b43f-c5c4f1f5f43c?slim=true"
        data-test-id="beehiiv-embed"
        // frameBorder="0"
        // scrolling="no"
        style={{
          margin: 0,
          borderRadius: "0px !important",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </div>
  );
}

export default Hero;
