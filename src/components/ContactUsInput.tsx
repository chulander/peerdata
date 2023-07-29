import { classNames } from "../utils";
export interface ContactUsInput {
  className?: string;
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  optional?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function ContactUsInput({
  className,
  onChange,
  error,
  label,
  name,
  type = "text",
  disabled = false,
  optional = false,
  value,
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
      {!error ? null : <span className="text-brand-orange">{error}</span>}
      <div className="mt-2.5 focus:outline-none focus-visible:outline-none">
        <input
          type={type}
          disabled={disabled}
          name={name}
          onChange={onChange}
          id={name}
          required={!optional}
          autoComplete={name}
          value={value}
          className={classNames(
            "focus:ring-brand-500 block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-inset focus-visible:outline-none sm:text-sm sm:leading-6",
            !disabled ? "" : "cursor-not-allowed"
          )}
        />
      </div>
    </div>
  );
}

export default ContactUsInput;
