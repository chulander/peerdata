import Banner from "../containers/Banner";
import BannerAlternate from "../containers/BannerAlternate";
import Personas from "../containers/Personas";
import SectionAlternate from "../containers/SectionAlternate";

export default function Home() {
  return (
    <div>
      <Banner />
      <Personas />
      <BannerAlternate />
      <SectionAlternate />
    </div>
  );
}
