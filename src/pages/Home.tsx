import Banner from "../containers/Banner";
import BannerAlternate from "../containers/BannerAlternate";
import Personas from "../containers/Personas";
import ProductCategories from "../containers/ProductCategories";

export default function Home() {
  return (
    <div>
      <Banner />
      <Personas />
      <BannerAlternate />
      <ProductCategories subtitle="D.A.T.A Categories" />
    </div>
  );
}
