import HeroContainer from "../../containers/HeroContainer";
import BannerAlternate from "../../containers/BannerAlternate";
import PersonasContainer from "../../containers/PersonaContainer";
import ProductCategories from "../../containers/ProductCategories";
import { Hero as HeroType } from "../../types/Hero";
import useQuery from "../../hooks/useQuery";
import { heroQuery } from "./queries/heroQuery";

export function Home() {
  const heroes = useQuery<HeroType>(heroQuery, "hero");

  return !heroes ? null : (
    <div>
      <HeroContainer
        title={heroes["title"]}
        description={heroes["description"]}
        image={heroes["image"]}
        links={heroes["links"]}
      />
      <PersonasContainer />
      <BannerAlternate />
      <ProductCategories description="D.A.T.A Categories" />
    </div>
  );
}
