import { ChangeEvent } from "react";
import { classNames } from "../utils";

export interface Input {
  className?: string;
  type?: HTMLInputElement["type"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isPrimary?: boolean;
  placeholder?: string;
}
export function Input({
  className,
  // type = "text",
  id,
  placeholder,
  isPrimary = true,
}: Input) {
  return (
    <input
      type="email"
      className={classNames(
        "header-2 flex w-full items-center border-2 border-solid bg-transparent px-6 py-3 text-2xl placeholder:text-2xl placeholder:text-brand-green focus:outline-dashed focus:outline-2 focus:outline-offset-4 focus:outline-brand-green",
        isPrimary
          ? "border-brand-dark-blue text-black focus:border-brand-dark-blue focus:shadow-none focus:outline-dashed focus:outline-2 focus:outline-offset-4 focus:outline-brand-green focus:ring-transparent focus-visible:border-brand-dark-blue"
          : "border-white text-white hover:border-white focus:border-white",
        !className ? "" : className
      )}
      name={id}
      placeholder={placeholder}
      id={id}
    />
  );
}
