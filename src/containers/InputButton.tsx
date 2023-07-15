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
};
export function InputButton({
  className,
  id,
  isPrimary = true,
  onChange,
  onClick,
  placeholder,
  label,
}: InputButton) {
  return (
    <div id={id} className={classNames("flex", !className ? "" : className)}>
      <Input
        className={classNames("basis-[65%]")}
        id={`${id}-input`}
        isPrimary={isPrimary}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button
        className={classNames("basis-[35%]", isPrimary ? "" : "border-white")}
        id={`${id}-button`}
        onClick={onClick}
        label={label}
        isPrimary={isPrimary}
      />
    </div>
  );
}
