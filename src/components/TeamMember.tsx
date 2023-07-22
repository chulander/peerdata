import { ReactSVG } from "react-svg";

import Ben from "../assets/team_photos/ben.jpeg";
import Cynthia from "../assets/team_photos/cynthia.jpeg";
import Kat from "../assets/team_photos/kat.jpeg";
import Kiet from "../assets/team_photos/kiet.jpeg";
import Marissa from "../assets/team_photos/marissa.jpeg";
import Souvik from "../assets/team_photos/souvik.jpeg";
import { classNames } from "../utils";
import Anchor from "./Anchor";
import { Icon } from "./Icon";
import NavLink from "./NavLink";
import { LinkedInLink } from "./LinkedInLink";

const TeamMembers = {
  ben: Ben,
  cynthia: Cynthia,
  kat: Kat,
  kiet: Kiet,
  marissa: Marissa,
  souvik: Souvik,
};
export interface TeamMember {
  className?: string;
  bio: string;
  image: keyof typeof TeamMembers;
  linkedin: string;
  name: string;
  role: string;
}

export function TeamMember({
  className,
  bio,
  image,
  linkedin,
  name,
  role,
}: TeamMember) {
  return (
    <article
      className={classNames("flex flex-col", !className ? "" : className)}
    >
      <img
        className="border-white border-4 aspect-square rounded-full h/48 w-48"
        alt={name}
        src={TeamMembers[image]}
      ></img>
      <header>
        <h2 className="mt-7 text-2xl font-normal text-white">{name}</h2>
      </header>
      <p className="mt-1 text-lg text-white">{role}</p>
      <Anchor className="mt-6" id="">Read Bio</Anchor>
      <LinkedInLink className="mt-3" to={linkedin} />
    </article>
  );
}
