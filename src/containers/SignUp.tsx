import { classNames } from "../utils";
import { InputButton } from "./InputButton";

export interface Signup {
  className?: string;
}
export function Signup({ className }: Signup) {
  return (
    <div className="border-b border-solid border-white bg-brand-dark-blue">
      <div
        className={classNames(
          "xs:flex xs:flex-col xs:items-center mx-auto bg-circular bg-no-repeat py-12 sm:block lg:flex lg:flex-col lg:gap-x-10",
          !className ? "" : className
        )}
      >
        <h2 className="text-4xl font-thin mt-8 text-white md:max-w-full lg:max-w-3xl xl:max-w-3xl leading-[2.9rem] tracking-tight">
          Start your data economy journey with Peer Data today. Sign up below to
          be the first to know about the launch.
        </h2>
        <InputButton
          className="mb-40 mt-24 h-16 w-full lg:w-[59%] xl:w-[39%]"
          id="hero-signup"
          isPrimary={false}
          hasIcon={true}
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
  );
}

export default Signup;
