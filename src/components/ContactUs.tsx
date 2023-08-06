import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import { classNames } from "../utils";
import ContactUsForm from "./ContactUsForm";
import { externalRoutes } from "../config";
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
        <div className="relative mt-40 lg:myb-40 lg:mt-0 lg:px-8 lg:pb-20 lg:pt-48">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl font-medium text-black lg:text-6xl">
              Contact us
            </h2>
            <p className="mt-6 text-lg font-light leading-6 text-black">
              Let us help you make better business decisions.
            </p>
            <p className="text-lg font-light leading-6 text-black">
              Contact us today to start your data economy journey.
            </p>
            <dl className="mt-10 space-y-4 text-base font-light leading-7 text-black">
              <a
                className="focus hover:text-brand-700 flex items-center gap-x-4 text-black"
                href={`mailto:${externalRoutes.mailbox.href}`}
              >
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd>{externalRoutes.mailbox.href}</dd>
              </a>
              {/* <div className="flex gap-x-4">
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
              </div> */}
              <a
                className="focus flex gap-x-4"
                href="https://goo.gl/maps/gTz7tE3wQihYL76V9"
                target="_blank"
                rel="noreferrer"
              >
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="focus hover:text-brand-700 flex flex-col text-black">
                  <span>560 Sylvan Ave</span>
                  <span>Englewood Cliffs, New Jersey 07632</span>
                </dd>
              </a>
            </dl>
          </div>
        </div>

        <ContactUsForm title="Get in touch" />
      </div>
    </div>
  );
}

export default ContactUs;
