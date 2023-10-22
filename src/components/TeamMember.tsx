import { Fragment, useState } from "react";

import Ben from "../assets/team_photos/ben.jpg";
import Cynthia from "../assets/team_photos/cynthia.jpg";
import Kat from "../assets/team_photos/kat.jpg";
import Kiet from "../assets/team_photos/kiet.jpg";
import Souvik from "../assets/team_photos/souvik.jpg";
import Gary from "../assets/team_photos/gary.jpg";
import Ryan from "../assets/team_photos/ryan.jpg";

import { classNames } from "../utils";
// import Anchor from "./Anchor";
// import { Icon } from "./Icon";
// import NavLink from "./NavLink";
import { LinkedInLink } from "./LinkedInLink";
import Modal from "react-modal";
import { TeamMemberDetail } from "./TeamMemberDetail";

const TeamMembers = {
  ben: Ben,
  cynthia: Cynthia,
  kat: Kat,
  kiet: Kiet,
  souvik: Souvik,
  gary: Gary,
  ryan: Ryan,
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
      className={classNames(
        "flex flex-col items-center lg:items-start",
        !className ? "" : className
      )}
    >
      <img
        className="h/48 aspect-square w-48 rounded-full border-4 border-white"
        alt={name}
        src={TeamMembers[image]}
      ></img>
      <header>
        <h2 className="mt-7 text-2xl font-normal text-white">{name}</h2>
      </header>
      <p className="mt-0.5 text-lg text-white">{role}</p>
      <div className="flex items-baseline gap-x-4 lg:flex-col lg:gap-x-0">
        <button
          className="focus anchor mt-3 text-brand-blue lg:self-start"
          onClick={openModal}
        >
          Read Bio
        </button>
        <LinkedInLink className="mt-3 w-5" to={linkedin} />
      </div>
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
