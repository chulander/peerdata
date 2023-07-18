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
        <h2 className="mt-8 text-6xl font-thin leading-[3.65rem] tracking-tight text-white md:max-w-full lg:max-w-3xl xl:max-w-6xl">
          Stay up to date with the latest news and trends in data. Sign up to
          the PEER DATA Newsletter, where we cover datasets, technology, and
          company news.
        </h2>
        <InputButton
          className="mb-40 mt-36 h-16 w-full lg:w-[59%] xl:w-[39%] text-[1.35rem]"
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
