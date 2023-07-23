import { Fragment, useState } from "react";

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
import Modal from "react-modal";
import { TeamMemberDetail } from "./TeamMemberDetail";

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

Modal.setAppElement("#modal-root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export function TeamMember({
  className,
  bio,
  image,
  linkedin,
  name,
  role,
}: TeamMember) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "blue";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <article
      className={classNames("flex flex-col", !className ? "" : className)}
    >
      <img
        className="h/48 aspect-square w-48 rounded-full border-4 border-white"
        alt={name}
        src={TeamMembers[image]}
      ></img>
      <header>
        <h2 className="mt-7 text-2xl font-normal text-white">{name}</h2>
      </header>
      <p className="mt-1 text-lg text-white">{role}</p>
      <button className="anchor text-brand-blue self-start mt-6" onClick={openModal}>
        Read Bio
      </button>
      <LinkedInLink className="mt-3" to={linkedin}/>
      <Modal
        isOpen={modalIsOpen}
        className="Modal focus-visible:outline-none"
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <TeamMemberDetail
          className="h-3/6 w-3/6"
          onClick={closeModal}
          bio={bio}
          image={image}
          linkedin={linkedin}
          name={name}
          role={role}
        />
      </Modal>
    </article>
  );
}
