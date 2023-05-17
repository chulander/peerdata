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
                  About PeerData
                </h1>
                <p className="mt-6 text-lg leading-snug text-brand-500">
                  Data runs the world, yet data itself is not widely understood.
                  Organizations still don’t know what data they have, where it
                  is, or who is using it. Most critically, they have absolutely
                  no way to measure the health of their data — how well it
                  supports business objectives.
                </p>
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
