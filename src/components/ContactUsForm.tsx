import { Dropdown } from "./Dropdown";
import { classNames } from "../utils";
import ContactUsInput from "./ContactUsInput";
import { Button } from "./Button";
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
export interface ContactUsForm {
  className?: string;
}
export function ContactUsForm({ className }: ContactUsForm) {
  return (
    <form
      action="#"
      method="POST"
      className={classNames(
        "pb-24 pt-20 sm:pb-32 lg:py-48",
        !className ? "" : className
      )}
    >
      <div className="mx-auto lg:mr-0">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
          <ContactUsInput name="firstname" label="Firstname" />
          <ContactUsInput name="surname" label="Surname" />
          <ContactUsInput name="email" label="Email" type="email" />
          <ContactUsInput name="phone" label="Phone" type="tel" optional />
          <div className="sm:col-span-1">
            <label
              htmlFor="persona"
              className="text-md block font-normal leading-6 text-black"
            >
              Reason for getting in touch
              <span className="text-base font-normal text-brand-green">
                &nbsp;(Optional)
              </span>
            </label>
            <div className="mt-2.5">
              <Dropdown items={items} className="bg-brand-light-background" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-md block font-normal leading-6 text-black"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="focus:ring-brand-500 block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex">
          <Button
            className="w-full lg:w-60 text-[1.3rem]"
            id="contact-submit"
            label="Submit"
            onClick={() => {
              console.log("click");
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default ContactUsForm;
