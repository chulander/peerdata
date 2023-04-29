import NavItem from "../components/NavItem";

export function JoinContainer() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-brand-700 sm:text-6xl lg:col-span-2 xl:col-auto">
              Join Us
            </h1>

            <div className="mt-6 flex max-w-xl flex-col justify-center lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-md relative leading-8 text-brand-500 sm:max-w-md lg:max-w-none">
                Interested in becoming part of PeerData? You must possess
                creativity, innovation as well as be willing to challenge
                existing standards.
              </p>
              <p className="text-md relative mt-2 leading-8 text-brand-500 sm:max-w-md lg:max-w-none">
                Our remote-first teams are situated across North America, Europe
                and Asia so don't miss this chance! Are you someone who loves
                collaborating while having a thirst for knowledge when it comes
                to data science?
              </p>
              <p className="text-md relative mt-2 leading-8 text-brand-500 sm:max-w-md lg:max-w-none">
                Then head over to our job listings today!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <NavItem
                  id="careers"
                  to="/careers"
                  className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue/80 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  Careers at PeerData
                </NavItem>
                <NavItem
                  id="contact"
                  to="/contact"
                  className="text-sm font-semibold leading-6 text-brand-700 hover:text-brand-700/80"
                >
                  Contact us <span aria-hidden="true">→</span>
                </NavItem>
              </div>
            </div>

            <img
              src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=2048x2048&w=is&k=20&c=nB37AAthL5AINPEz4tK8kiYHGjJm_YtKuSjJZvOiqfA="
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinContainer;
