import { ReactSVG } from "react-svg";
import ConnectingData from "../assets/icons/connecting-data.svg";
import ContactAddress from "../assets/icons/contact-address.svg";
import ContactEmail from "../assets/icons/contact-email.svg";
import ContactPhone from "../assets/icons/contact-phone.svg";
import DataConsumer from "../assets/icons/data-consumer.svg";
import DataInvestor from "../assets/icons/data-investor.svg";
import DataOwner from "../assets/icons/data-owner.svg";
import DigitalEconomy from "../assets/icons/digital-economy.svg";
import Expertise from "../assets/icons/expertise.svg";
import HeaderCalendar from "../assets/icons/header-calendar.svg";
import Linkedin from "../assets/icons/linkedin.svg";

const Icons = {
  "connecting-data": ConnectingData,
  "contact-address": ContactAddress,
  "contact-email": ContactEmail,
  "contact-phone": ContactPhone,
  "data-consumer": DataConsumer,
  "data-investor": DataInvestor,
  "data-owner": DataOwner,
  "digital-economy": DigitalEconomy,
  expertise: Expertise,
  "header-calendar": HeaderCalendar,
  linkedin: Linkedin,
};
export interface Icon {
  className?: string;
  name: keyof typeof Icons;
}

export function Icon({ className, name }: Icon) {
  return <ReactSVG className={className} src={Icons[name]} />;
}
