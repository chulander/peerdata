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
                    href={`mailto:${externalRoutes.mailbox.href}`}
                  >
                    {externalRoutes.mailbox.href}
                  </a>
                </dd>
              </div>
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
                href="https://goo.gl/maps/gTz7tE3wQihYL76V9"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-black"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="hover:text-brand-700 text-black">
                    560 Sylvan Ave
                    <br />
                    Englewood Cliffs, New Jersey 07632
                  </dd>
                </div>
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
