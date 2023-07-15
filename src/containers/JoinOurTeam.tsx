import { NavItem } from "../components/NavItem";
export function JoinOurTeam() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto px-6 py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-brand-700 sm:text-4xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-snug text-black font-light">
              Interested in becoming part of PEER DATA?
            </p>
            <p className="mt-4 text-lg leading-snug text-black font-light">
              You must possess creativity, innovation as well as be willing to
              challenge existing standards. Our remote-first teams are situated
              across North America, Europe and Asia so don&apos;t miss this chance!
            </p>
            <p className="mt-4 text-lg leading-snug text-black font-light">
              Are you someone who loves collaborating while having a thirst for
              knowledge when it comes to data science? Then head over to our job
              listings today!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <NavItem
                id="careers"
                to="/careers"
                className="rounded-md bg-brand-blue px-8 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-blue/80 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                Join Us
              </NavItem>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:w-1/3 lg:flex-shrink-0 lg:flex-grow">
            <img
              alt="Join Us"
              src="https://media.graphassets.com/FQ732tLFQ96z8VFPUVFr"
              className="mx-auto rounded bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
