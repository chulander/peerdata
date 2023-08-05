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
      <ContactUs className="peerdata-container" />
      <SplitImages
        className="peerdata-container-assets-only mt-20 lg:mt-40"
        left={Contact1}
        right={Contact2}
      />
      <Signup className="mt-30 peerdata-container w-full lg:mt-60" />
    </section>
  );
}
