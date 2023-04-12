import HeroContainer from "../containers/HeroContainer";
import BannerAlternate from "../containers/BannerAlternate";
import Personas from "../containers/Personas";
import ProductCategories from "../containers/ProductCategories";
import { Hero as HeroType } from "../types/Hero";
import useQuery from "../hooks/useQuery";
import { heroQuery } from "../queries/heroQuery";

export default function Home() {
  const heroes: HeroType | null = useQuery(heroQuery, "hero");

  return !heroes ? null : (
    <div>
      <HeroContainer
        title={heroes["title"]}
        subtitle={heroes["subtitle"]}
        image={heroes["image"]}
        links={heroes["links"]}
      />
      <Personas />
      <BannerAlternate />
      <ProductCategories subtitle="D.A.T.A Categories" />
    </div>
  );
}
