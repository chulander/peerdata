import { Icon } from "../components/Icon";
import { NavLink } from "../components/NavLink";
import { classNames } from "../utils";
import { NavItem } from "./Nav";
import { InputButton } from "./InputButton";

export interface Footer {
  className?: string;
  items: NavItem[];
}

export function Footer({ className, items }: Footer) {
  return (
    <footer className="flex bg-brand-deep-blue">
      <section
        className={classNames("flex pb-12 pt-24 justify-between w-full", !className ? "" : className)}
      >
        <article>
          <Icon className="text-white" name="logo" />
          <header>
            <p className="body-x-small text-white">
              Our mission is to assist organizations in transforming their data
              into values assets
            </p>
          </header>
        </article>
        <nav className="">
          {items.map(({ id, name, href }) => (
            <NavLink
              id={id}
              key={id}
              // eslint-disable-next-line react/no-children-prop
              children={name}
              to={href}
              className={({ isActive, isPending }) =>
                classNames(
                  "body-x-small flex items-center text-white",
                  isActive ? "" : ""
                )
              }
            />
          ))}
        </nav>
        <section className="flex flex-col">
          <p className="body-small mt-4 text-white">
            Peer Data enables you to turn data into assets.
          </p>
          <InputButton
            className="mt-6 h-16 w-full"
            id="hero-signup"
            isPrimary={false}
            placeholder="Your company email"
            label="Sign up"
            onChange={() => {
              console.log("test");
            }}
            onClick={() => {
              console.log("test");
            }}
          />
        </section>
        <section></section>
      </section>
    </footer>
  );
}

export default Footer;
