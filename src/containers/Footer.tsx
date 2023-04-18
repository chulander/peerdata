import NavItem from "../components/NavItem";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavItem to="/" className="mb-4 flex items-center sm:mb-0">
            <img
              src="https://media.graphassets.com/blG6MNRuKwjSXsEQNXAd"
              className="mr-3 h-32"
              alt="Flowbite Logo"
            />
          </NavItem>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <NavItem to="/careers" className="mr-4 hover:underline md:mr-6 ">
                Careers
              </NavItem>
            </li>
            <li>
              <NavItem to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </NavItem>
            </li>
            <li>
              <NavItem to="/contact" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </NavItem>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            PeerData™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
