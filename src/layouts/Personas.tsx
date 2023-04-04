import { NavLink } from "react-router-dom";
import Card from "../components/Card";

export default function Personas() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">Personas</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card
              to="/products#owner"
              name="Data Owner"
              image="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE="
            />
            <Card
              to="/products#investor"
              name="Data Invest"
              image="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE="
            />
            <Card
              to="/products#consumer"
              name="Data Consumer"
              image="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE="
            />
          </div>
        </div>
      </div>
    </section>
  );
}
