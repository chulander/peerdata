import { ReactSVG } from "react-svg";
import Linkedin from "../assets/icons/linkedin.svg";
import { classNames } from "../utils";

export interface LinkedInLink {
  className?: string;
  to: string;
}

export function LinkedInLink({ className, to }: LinkedInLink) {
  return (
    <a
      className={classNames(
        "focus anchor-border flex w-min items-baseline gap-x-2 pb-1 text-lg text-brand-blue",
        !className ? "" : className
      )}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      <ReactSVG className={className} src={Linkedin} /> 
      <span className="text-[1.25rem] leading-[0.25rem] tracking-tight">LinkedIn</span>
    </a>
  );
}
