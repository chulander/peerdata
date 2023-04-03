import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";

export default function Example() {
  return (
    <div className="bg-white">
      <Nav />
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: "32rem",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className="flex h-full w-full items-center bg-gray-900/50">
          <div className="m-24 flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold uppercase text-white md:text-3xl">
              Product
            </h1>
            <span className="text-white">Description</span>
            <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
              Start project
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: "32rem",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className="flex h-full w-full items-center bg-gray-900/50">
          <div className="m-24 flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold uppercase text-white md:text-3xl">
              Product
            </h1>
            <span className="text-white">Description</span>
            <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
              Start project
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: "32rem",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className="flex h-full w-full items-center bg-gray-900/50">
          <div className="m-24 flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold uppercase text-white md:text-3xl">
              Product
            </h1>
            <span className="text-white">Description</span>
            <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
              Start project
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
