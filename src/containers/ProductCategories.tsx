import { NavLink } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import Subtitle from "../components/Subtitle";

export type ProductCategories = {
  subtitle: string;
};

export default function ProductCategories({ subtitle }: ProductCategories) {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <Subtitle text={subtitle} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <CategoryCard to="/products#discover" name="Discover" />
          <CategoryCard to="/products#assess" name="Assess" />
          <CategoryCard to="/products#trade" name="Trade" />
          <CategoryCard to="/products#amplify" name="Amplify" />
        </div>

        <div className="mt-12 text-center">
          <NavLink
            to="/products"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </NavLink>
        </div>
      </div>
    </section>
  );
}
