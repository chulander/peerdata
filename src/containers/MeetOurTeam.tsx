import { classNames } from "../utils";

import { TeamMember } from "../components/TeamMember";
export interface MeetOurTeam {
  className?: string;
  teamMembers: TeamMember[];
}
export function MeetOurTeam({ className, teamMembers }: MeetOurTeam) {
  return (
    <div
      className={classNames(
        "xs:flex xs:flex-col xs:items-center mx-auto min-h-screen bg-brand-dark-blue bg-circular bg-cover bg-no-repeat py-12 sm:block lg:flex lg:flex-col lg:gap-x-10",
        !className ? "" : className
      )}
    >
      <div className="">
        <h4 className="body-small font-normal text-white">
          Meet our team team of experts
        </h4>
        <p className="mt-4 text-[1.3rem] font-thin leading-[1.8rem] text-brand-light-background lg:w-3/5 lg:text-[1.6rem] lg:leading-7 lg:tracking-tight">
          The Peer Data founding team has a proven track record of success in
          the financial data industry. We have built a multi-trillion-dollar
          asset class (ABX and CMBX), collectively ran $1B+ data businesses, and
          worked together for over 10 years. We have a strong understanding of
          the data lifecycle and value journey, from collection and distribution
          to monetization. The team is experienced in working with regulators
          and market participants.
        </p>
        <ul className="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {teamMembers.map((details) => (
            <TeamMember key={details["name"]} {...details} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeetOurTeam;
