import AboutPeerData from "../../../containers/AboutPeerData";
import DataExperts from "../../../containers/DataExperts";
import JoinOurTeam from "../../../containers/JoinOurTeam";
import { Jumbotron } from "../../../containers/Jumbotron";

// import useQuery from "../../../hooks/useQuery";
export function About() {
  return (
    <section>
      <AboutPeerData />
      <DataExperts />
      <JoinOurTeam />
    </section>
  );
}

export default About;
