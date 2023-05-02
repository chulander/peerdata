import { ContactFeature } from "../../components/ContactFeature";
import { ContactUsForm } from "../../components/ContactUsForm";
import ContactFindUs from "../../containers/ContactFindUs";

export function ContactUs() {
  return (
    <section className="m-auto flex w-full flex-col items-center justify-center">
      <ContactUsForm />
      <ContactFeature />
      <ContactFindUs />
    </section>
  );
}
