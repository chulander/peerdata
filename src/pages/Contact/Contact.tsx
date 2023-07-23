import { ContactUsForm } from "../../components/ContactUsForm";
import Contact1 from "../../assets/images/image-contact-1.jpg";
import Contact2 from "../../assets/images/image-contact-2.jpg";
import Signup from "../../containers/SignUp";

import { SplitImages } from "../../containers/SplitImages";
export interface Contact {
  className?: string;
}
export function ContactUs({ className }: Contact) {
  return (
    <section className={className}>
      <ContactUsForm />
      <SplitImages left={Contact1} right={Contact2} />
      <Signup className="w-full px-12 mt-60" />
    </section>
  );
}
