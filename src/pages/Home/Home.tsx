import { Hero } from "../../containers/Hero";
import { SplitImages } from "../../containers/SplitImages";
import { LeftText } from "../../containers/LeftText";
import { DataEconomyRoles } from "../../containers/DataEconomyRoles";
import Home1 from "../../assets/images/image-home-1.jpg";
import Home2 from "../../assets/images/image-home-2.jpg";
import Home3 from "../../assets/images/image-home-3.jpg";
import Home4 from "../../assets/images/image-home-4.jpg";
import { ValueProps } from "../../containers/ValueProps";
import Signup from "../../containers/SignUp";

import dataEconomyRoles from "../../payload/data_econonmy_roles.json";
import valuePropositionItems from "../../payload/value_propositions_items.json";
import { LinkButtonInternalRoute } from "../../components/LinkButton";
import { externalRoutes, internalRoutes } from "../../config";

export interface Home {
  className?: string;
}
export function Home({ className }: Home) {
  return (
    <section className={className}>
      <Hero className="px-12 " />
      <SplitImages className="mt-20 h-3/4 px-12" left={Home1} right={Home2} />
      <LeftText
        className="mt-40 bg-brand-light-background px-12 py-20"
        category="Data Revolution"
        mainContent="Data is experiencing exponential growth, having doubled in the last two years. And
        despite an ever-increasing demand for diverse and extensive datasets, the industry has
        no direct way to invest in data."
        subContent="PEER DATA is building tools to empower organizations to unlock the maximum value of
        their data, amplify its reach and allow institutions to invest in the data asset class."
      />
      <DataEconomyRoles
        buttonLabel="Contact us"
        className="mt-48 px-12"
        items={dataEconomyRoles.data as DataEconomyRoles["items"]}
        title="What is your Role in the Data Economy?"
      />
      <SplitImages className="mt-20 h-3/4 px-12" left={Home3} right={Home4} />
      <LeftText
        className="mt-40 bg-brand-light-background px-12 py-20"
        category="Mission"
        title="Our mission is to empower organizations to transform their data into assets."
        mainContent="PEER DATA was born out of the observation that data is powering nearly
        everything we do today and is becoming an essential commodity for the digital world.
        Usage of data to power artificial intelligence (AI) is rapidly growing across all industries."
        subContent="We witnessed the transformative journey of data, from its role in supporting human
        decision-making to empowering machines to make informed choices in financial markets
        and everyday life on a global scale."
      >
        <LinkButtonInternalRoute
          className="mt-12 w-full text-[1.35rem] lg:w-[65%] xl:max-w-[38%]"
          to={externalRoutes.waitlist.href}
          isPrimary={false}
        >
          Find out more
        </LinkButtonInternalRoute>
      </LeftText>
      <hr className="my-36 h-0.5 bg-brand-dark-blue px-12 lg:mx-12 lg:my-52" />
      <ValueProps
        items={valuePropositionItems.data as ValueProps["items"]}
        className="px-12"
        buttonLabel="Contact us"
        externalHref={internalRoutes.contact.href}
        title="We aim to unlock maxium value and amplify reach by:"
      />
      <Signup className="px-12" />
    </section>
  );
}
