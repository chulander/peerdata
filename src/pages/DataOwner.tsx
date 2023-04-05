import Banner from "../containers/Banner";
import BannerAlternate from "../containers/BannerAlternate";
import Personas from "../containers/Personas";
import ProductCategories from "../containers/ProductCategories";
import { DataOwnerBanner } from "../containers/DataOwnerBanner";

export default function DataOwner() {
  return (
    <div>
      <DataOwnerBanner img="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE=" />
      <Personas />
      <BannerAlternate />
      <ProductCategories subtitle="D.A.T.A Categories" />
    </div>
  );
}
