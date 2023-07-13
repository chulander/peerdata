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
      <Input className="basis-7/12" id={`${id}-input`} placeholder={placeholder} onChange={onChange} />
      <Button
        className="basis-5/12"
        id={`${id}-button`}
        onClick={onClick}
        label={label}
        isPrimary={isPrimary}
      />
    </div>
  );
}
