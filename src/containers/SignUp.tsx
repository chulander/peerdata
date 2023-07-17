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
          "xs:flex xs:flex-col xs:items-center mx-auto bg-circular bg-right bg-no-repeat py-12 sm:block lg:flex lg:flex-col lg:gap-x-10",
          !className ? "" : className
        )}
      >
        <h2 className="header-2 mt-10 text-brand-light-background lg:max-w-6xl">
          Start your data economy journey with Peer Data today. Sign up below to
          be the first to know about the launch.
        </h2>
        <InputButton
          className="mb-40 mt-28 h-16 w-full lg:w-[55%] xl:w-[45%]"
          id="hero-signup"
          isPrimary={false}
          hasIcon={false}
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
