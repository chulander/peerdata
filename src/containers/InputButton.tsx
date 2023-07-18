import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { classNames } from "../utils";

export type InputButton = {
  className?: string;
  id: string;
  isPrimary?: Button["isPrimary"];
  onClick: Button["onClick"];
  onChange: Input["onChange"];
  placeholder?: Input["placeholder"];
  label: Button["label"];
  hasIcon?: Button["hasIcon"];
  buttonClass?: string;
  inputClass?: string;
};
export function InputButton({
  buttonClass,
  className,
  id,
  inputClass,
  isPrimary = true,
  hasIcon,
  onChange,
  onClick,
  placeholder,
  label,
}: InputButton) {
  return (
    <div id={id} className={classNames("flex", !className ? "" : className)}>
      <Input
        className={classNames("basis-[62%]", !inputClass ? "" : inputClass)}
        id={`${id}-input`}
        isPrimary={isPrimary}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button
        className={classNames(
          !hasIcon ? "grow" : "basis-[38%]",
          isPrimary ? "" : "border-white",
          !buttonClass ? "" : buttonClass
        )}
        hasIcon={hasIcon}
        id={`${id}-button`}
        onClick={onClick}
        label={label}
        isPrimary={isPrimary}
      />
    </div>
  );
}
