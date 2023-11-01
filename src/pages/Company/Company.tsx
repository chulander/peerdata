import { SplitImages } from "../../containers/SplitImages";
import Home3 from "../../assets/images/image-home-3.jpg";
import Home4 from "../../assets/images/image-home-4.jpg";
import { ValueProps } from "../../containers/ValueProps";
import AlternateHero from "../../containers/AlternateHero";
import competitiveEdges from "../../payload/competitve_edges.json";
import { CompanyHistory } from "../../containers/CompanyHistory";
import { CompanyTransparency } from "../../containers/CompanyTransparency";
import { JoinOurTeam } from "../../containers/JoinOurTeam";
import MeetOurTeam from "../../containers/MeetOurTeam";

import teamMembers from "../../payload/team_members.json";
import { TeamMember } from "../../components/TeamMember";
import { HorizontalLine } from "../../components/HorizontalLine";
import { externalRoutes } from "../../config";

export interface Company {
  className?: string;
}
export function Company({ className }: Company) {
  return (
    <section className={className}>
      <AlternateHero className="peerdata-container" />
      <CompanyHistory
        className="peerdata-container"
        category="History"
        mainContent="In the last decade, systematic analysis has gone from a nice to have and a competitive edge, to a must have and a disadvantage if not employed in running a business. With that, data costs are rising, and consumers have no way to hedge against rising costs.  Companies have no simple way to capitalize on their data, while investors have no direct way to invest in an exponentially growing asset."
      />

      <HorizontalLine />
      <CompanyTransparency
        className="peerdata-container"
        category="Fostering Transparency"
        mainContent="The data market itself has long standing challenges. The data discovery and procurement processes are still largely manual, licensing rights management is based on honesty statements, and understanding the quality of data is a time-consuming, subjective process."
      />

      <ValueProps
        items={competitiveEdges.data as ValueProps["items"]}
        className="peerdata-container bg-brand-light-background"
        buttonLabel="Find out more"
        externalHref={externalRoutes.waitlist.href}
        title="Peer Data is helping the participants in the data ecosystem by building tools which:"
      />
      <MeetOurTeam
        className="peerdata-container"
        teamMembers={teamMembers["data"] as TeamMember[]}
      />

      <JoinOurTeam
        className="peerdata-container"
        title="Join our team"
        mainContent="Are you someone who loves collobration while having a thirst for knowledge when it comes to data science? Then head over to our job listings today!"
      />
      <HorizontalLine />
      <SplitImages
        className="peerdata-container h-3/4"
        left={Home3}
        right={Home4}
      />
    </section>
  );
}
