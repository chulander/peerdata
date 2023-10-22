import { classNames } from "../utils";
import { InputButton } from "./InputButton";

export interface Signup {
  className?: string;
}
export function Signup({ className }: Signup) {
  return (
    <div
      className={classNames(
        "border-b border-solid border-white bg-brand-dark-blue",
        !className ? "" : className
      )}
    >
      <div className="xs:flex xs:flex-col xs:items-center mx-auto bg-circular bg-no-repeat sm:block lg:flex lg:flex-col lg:gap-x-10">
        <h2 className="text-2xl font-thin leading-7 tracking-tight text-white md:max-w-full md:text-5xl lg:max-w-3xl lg:leading-[3.65rem] xl:max-w-6xl xl:text-6xl">
          Stay up to date with the latest news and trends in data. Sign up to
          the PEER DATA Newsletter, where we cover datasets, technology, and
          company news.
        </h2>
        <InputButton
          className="mt-36 h-16 w-full text-[1.35rem] lg:w-[59%] xl:w-[39%]"
          buttonClass="bg-brand-light-background"
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
