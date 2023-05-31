import NavItem from "../components/NavItem";

export function AboutPeerData() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-40 lg:px-8 lg:pr-0">
              <div className="mx-auto lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-brand-700 sm:text-6xl">
                  About PEER DATA
                </h1>

                <p className="text-md mt-6 leading-snug text-brand-500">
                  PEER DATA is borne out of the observation that data and AI are
                  powering nearly everything we do today. Data, as the vital
                  commodity powering the AI and digital world, holds immense
                  value and potential.
                </p>
                <p className="text-md relative mt-4 leading-snug text-brand-500">
                  With decades of experience in the field, our team has
                  witnessed the transformative journey of data, from its role in
                  supporting human decision-making to empowering machines to
                  make informed choices in financial markets and everyday life
                  on a global scale. We have recognized the importance of data
                  as foundational building blocks in facilitating the
                  introduction of new asset classes, ensuring their operational
                  scalability and fostering transparency among all stakeholders
                  involved.
                </p>
                <p className="text-md relative mt-4 leading-snug text-brand-500">
                  Data is experiencing exponential growth, having doubled in
                  just the past two years. Yet, despite the ever-increasing
                  demand for diverse and extensive datasets, there is currently
                  no direct avenue for investing in data. The data discovery
                  process remains predominantly manual, and evaluating data
                  quality is a time-consuming and subjective endeavor. While we
                  often humorously remark that "
                  <span className="font-bold text-black">
                    everyone is in the data business, they just don't know it
                    yet,
                  </span>
                  " the reality is that there is a lack of clear means to
                  capitalize on the financial opportunities generated by one's
                  own data.
                </p>
                <div className="relative mt-4 ">
                  <p className="text-md leading-snug text-brand-500">
                    To address this challenge, PEER DATA has embarked on a
                    mission to assist organizations in transforming their data
                    into valuable assets. We aim to unlock maximum value and
                    amplify reach by:
                  </p>
                  <ul className="text-md relative ml-4 mt-4 list-outside list-disc leading-snug text-brand-500">
                    <li>
                      Providing expertise, standard, and cutting-edge technology
                      to build infrastructure and rails for the data asset class
                    </li>
                    <li>Enabling digital discovery and monetization of data</li>
                    <li>
                      Connecting data owners, investors, and consumers to trade
                      data as an asset
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <NavItem
                    id="contact"
                    to="/contact"
                    className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    Contact us
                  </NavItem>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=1024x1024&w=is&k=20&c=JZprgGDQ8xqa6iu0fyKJfKOlAvae0w9U-AdHeCT2kg4="
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPeerData;
