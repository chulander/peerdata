import { Icon } from "../components/Icon";
import NavItem from "../components/NavItem";
import { classNames } from "../utils";

export interface Footer {
  className?: string;
}
export function Footer({ className }: Footer) {
  return (
    <footer className="flex bg-brand-dark-blue">
      <section
        className={classNames("flex flex-col", !className ? "" : className)}
      >
        <Icon className="text-white" name="logo" />
        <p>
          Our mission is to assist organizations in transforming their data into
          values assets
        </p>
      </section>
    </footer>
  );
}

export default Footer;
