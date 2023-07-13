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
  type = "text",
  id,
  placeholder,
  isPrimary = true,
}: Input) {
  return (
    <input
      className={classNames(
        "w-full flex items-center px-6 py-3 text-xl/7 font-normal tracking-tighter placeholder:text-brand-green focus:outline-dashed focus:outline-2 focus:outline-offset-4 focus:outline-brand-green",
        isPrimary
          ? "border-2 border-solid border-brand-dark-blue text-black focus:border-brand-dark-blue focus:shadow-none focus:ring-transparent focus-visible:border-brand-dark-blue focus-visible:outline-none"
          : "border-2 border-solid border-white text-white hover:border-brand-dark-blue",
        !className ? "" : className
      )}
      name={id}
      placeholder={placeholder}
      type={type}
      id={id}
    />
  );
}
