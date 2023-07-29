import { ContactUs } from "../../components/ContactUs";
import Contact1 from "../../assets/images/image-contact-1.jpg";
import Contact2 from "../../assets/images/image-contact-2.jpg";
import Signup from "../../containers/SignUp";

import { SplitImages } from "../../containers/SplitImages";
export interface Contact {
  className?: string;
}
export function Contact({ className }: Contact) {
  return (
    <section className={className}>
      <ContactUs className="px-12" />
      <SplitImages className="mt-40 px-12" left={Contact1} right={Contact2} />
      <Signup className="mt-60 w-full px-12" />
    </section>
  );
}
