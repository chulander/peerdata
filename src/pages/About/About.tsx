import AboutPeerData from "../../containers/AboutPeerData";
import DataExperts from "../../containers/DataExperts";
import JoinOurTeam from "../../containers/JoinOurTeam";
import { Jumbotron } from "../../containers/Jumbotron";
import MeetOurTeam from "../../containers/MeetOurTeam";
import PeerDataValues from "../../containers/PeerDataValues";

// import useQuery from "../../../hooks/useQuery";
export function About() {
  return (
    <section className="space-y-8">
      <AboutPeerData />
      <DataExperts />
      <PeerDataValues />
      <JoinOurTeam />
      <MeetOurTeam />
    </section>
  );
}

export default About;
