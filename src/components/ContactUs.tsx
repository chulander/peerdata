import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Dropdown } from "./Dropdown";
import { classNames } from "../utils";
import ContactUsForm from "./ContactUsForm";
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
const items = tiers.map(({ name, id }) => ({ name, id }));
export interface ContactUs {
  className?: string;
}
export function ContactUs({ className }: ContactUs) {
  return (
    <div
      className={classNames(
        "relative isolate bg-white",
        !className ? "" : className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-6xl font-medium text-black">Contact us</h2>
            <p className="mt-6 text-lg font-light leading-6 text-black">
              Let us help you make better business decisions.
            </p>
            <p className="text-lg font-light leading-6 text-black">
              Contact us today to start your data economy journey.
            </p>
            <dl className="mt-10 space-y-4 text-base font-light leading-7 text-black">
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
                    href="mailto:contact@peerdata.tech"
                  >
                    contact@peerdata.tech
                  </a>
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
            </dl>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
