import { ContactUs } from "../../components/ContactUs";
import Contact1 from "../../assets/images/image-contact-1.jpg";
import Contact2 from "../../assets/images/image-contact-2.jpg";
import Signup from "../../containers/SignUp";

import { SplitImages } from "../../containers/SplitImages";
import { HorizontalLine } from "../../components/HorizontalLine";
export interface Contact {
  className?: string;
}
export function Contact({ className }: Contact) {
  return (
    <section className={className}>
      <ContactUs className="peerdata-container" />
      <HorizontalLine />
      <SplitImages
        className="peerdata-container"
        left={Contact1}
        right={Contact2}
      />
      <Signup className="peerdata-container" />
    </section>
  );
}
