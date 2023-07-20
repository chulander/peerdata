import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Dropdown } from "./Dropdown";
export const tiers = [
  {
    name: "Data Owner",
    id: "data-owner",
    href: "/contact",
    description:
      "Turn your data into assets. We provide tools to guide you through your data monetization journey, to unlock maximum value and amplify reach.",
    cta: "Contact Us",
    image: "https://media.graphassets.com/ZR4pkoNwRvyFCOVbVpeH",
  },
  {
    name: "Data Consumer",
    id: "data-consumer",
    href: "/contact",
    description:
      "Reduce time to context, objective assessment of data quality and improve the data discovery process.",
    cta: "Contact Us",
    image: "https://media.graphassets.com/z6MgBBtHS2rwKEIrAQoQ",
  },
  {
    name: "Data Investor",
    id: "data-investor",
    href: "/contact",
    description: "Invest in the essential commodity powering the data economy.",
    cta: "Contact Us",
    image: "https://media.graphassets.com/DhI5g0FQZug56y6hWcXn",
  },
];
export function ContactUsForm() {
  return (
    <div className="relative isolate bg-white">
      <div className="grid w-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto lg:mx-0">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-brand-700 text-4xl font-bold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-6 text-lg font-light leading-8 text-black">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="text-brand-700 mt-10 space-y-4 text-base font-light leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="hover:text-brand-700 text-black">
                  555 Main St.
                  <br />
                  New York, NY 10018
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-brand-700 text-black"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-brand-700 text-black"
                    href="mailto:hello@peerdata.tech"
                  >
                    hello@peerdata.tech
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto lg:mr-0">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="text-md text-brand-700 block font-bold leading-6"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="focus:ring-brand-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="persona"
                  className="text-md text-brand-700 block font-bold leading-6"
                >
                  Your Role in the Data Economy
                </label>
                <div className="mt-2.5">
                  <Dropdown
                    items={items}
                    className="focus:ring-brand-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="text-md text-brand-700 block font-bold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="focus:ring-brand-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="text-md text-brand-700 block font-bold leading-6"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="focus:ring-brand-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-md text-brand-700 block font-bold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="focus:ring-brand-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex">
              <button
                type="submit"
                className="focus-visible:outline-brand-500 rounded-md bg-brand-blue px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-brand-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
