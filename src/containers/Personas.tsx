import Card from "../components/Card";

export default function Personas() {
  return (
    <section>
      <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-full text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">Personas</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card
              to="/data-owners"
              name="Data Owner"
              img="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE="
            />
            <Card
              to="/contact"
              name="Data Investors"
              img="https://media.istockphoto.com/id/1160000498/photo/business-partnership-meeting-in-office.jpg?s=612x612&w=is&k=20&c=RIPtYg627kOZA6c0bGQ3PRhq_qM8QmBgvnEaV-agK28="
            />
            <Card
              to="/contact"
              name="Data Consumers"
              img="https://media.istockphoto.com/id/1160135293/photo/business-people-discussion-advisor-concept.jpg?s=612x612&w=is&k=20&c=BxvUkSQ6MLsU25NSrxfWbLDlaRrvGT0oGkAPdVxGHPI="
            />
          </div>
        </div>
      </div>
    </section>
  );
}
