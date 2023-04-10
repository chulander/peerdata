import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative bg-[url(https://media.istockphoto.com/id/1093930098/vector/abstract-blockchain-network-background.jpg?s=1024x1024&w=is&k=20&c=evjOsQuUUGoCcAbSm-9tIA0cPrqgRD4nKYtmw_d5vpA=)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-1/2 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-primary">
              Product
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <NavLink
              to="/products"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
