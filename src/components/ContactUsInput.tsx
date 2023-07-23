import { classNames } from "../utils";
export interface ContactUsInput {
  className?: string;
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  optional?: boolean;
}
export function ContactUsInput({
  className,
  label,
  name,
  type = "text",
  optional = false,
}: ContactUsInput) {
  return (
    <div className={classNames(!className ? "" : className)}>
      <label
        htmlFor={name}
        className="text-md block font-normal leading-6 text-black"
      >
        {label}
        {!optional ? null : (
          <span className="text-base font-normal text-brand-green">
            &nbsp;(Optional)
          </span>
        )}
      </label>
      <div className="mt-2.5 focus:outline-none focus-visible:outline-none">
        <input
          type={type}
          name={name}
          id={name}
          autoComplete={name}
          className="focus:ring-brand-500 block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-inset focus-visible:outline-none sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default ContactUsInput;
