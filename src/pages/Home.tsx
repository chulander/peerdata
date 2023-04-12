import Banner from "../containers/Banner";
import BannerAlternate from "../containers/BannerAlternate";
import Personas from "../containers/Personas";
import ProductCategories from "../containers/ProductCategories";
import useBanners from "../hooks/userBanner";
import { Banner as BannerType } from "../types/Banner";

export default function Home() {
  const banners: BannerType[] | null = useBanners();

  return !banners ? null : (
    <div>
      <Banner
        title={banners[0]["title"]}
        subtitle={banners[0]["subtitle"]}
        image={banners[0]["image"]}
        buttons={banners[0]["buttons"]}
      />
      <Personas />
      <BannerAlternate />
      <ProductCategories subtitle="D.A.T.A Categories" />
    </div>
  );
}
