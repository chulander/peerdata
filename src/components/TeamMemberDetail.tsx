import { Fragment, useState, MouseEventHandler } from "react";

import Ben from "../assets/team_photos/ben.jpg";
import Cynthia from "../assets/team_photos/cynthia.jpg";
import Kat from "../assets/team_photos/kat.jpg";
import Kiet from "../assets/team_photos/kiet.jpg";
import Marissa from "../assets/team_photos/marissa.jpg";
import Souvik from "../assets/team_photos/souvik.jpg";
import { classNames } from "../utils";
import Anchor from "./Anchor";
import { Icon } from "./Icon";
import NavLink from "./NavLink";
import { LinkedInLink } from "./LinkedInLink";
import Modal from "react-modal";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

const TeamMembers = {
  ben: Ben,
  cynthia: Cynthia,
  kat: Kat,
  kiet: Kiet,
  marissa: Marissa,
  souvik: Souvik,
};
export interface TeamMemberDetail {
  className?: string;
  bio: string;
  image: keyof typeof TeamMembers;
  linkedin: string;
  name: string;
  role: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function TeamMemberDetail({
  className,
  bio,
  image,
  linkedin,
  name,
  role,
  onClick,
}: TeamMemberDetail) {
  return (
    <article
      className={classNames(
        "flex flex-col bg-brand-light-background peerdata-container pt-40 lg:pt-10 pb-24 w-full focus-visible:outline-none",
        !className ? "" : className
      )}
    >
      <div className="flex justify-end">
        <button
          className="button-primary flex items-center justify-between px-4 py-3 text-white"
          name="back"
          id="modal-close-button"
          onClick={onClick}
        >
          <span className="inline-block">
            <ArrowLongLeftIcon
              className={classNames("-ml-2 h-8 text-white")}
              aria-hidden="true"
            />
          </span>
          <span className="ml-3 block  text-[1.2rem] font-normal tracking-normal">
            Back
          </span>
        </button>
      </div>
      <img
        className="h/32 aspect-square w-32 rounded-full"
        alt={name}
        src={TeamMembers[image]}
      ></img>
      <header>
        <h2 className="mt-7 text-2xl font-normal tracking-tight text-black">
          {name}
        </h2>
      </header>
      <p className="mt-1 text-lg tracking-tight text-black">{role}</p>

      <LinkedInLink className="w-5 mt-2" to={linkedin} />
      <div className="flex">
        <p className="mt-6 text-lg leading-6 text-black lg:basis-1/2">{bio}</p>
      </div>
    </article>
  );
}
