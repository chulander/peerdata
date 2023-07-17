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
    <footer className="bg-brand-deep-blue">
      <section
        className={classNames(
          "flex gap-x-40 w-full pb-12 pt-24",
          !className ? "" : className
        )}
      >
        <article className="flex flex-col lg:basis-3/12">
          <Icon className="text-white" name="logo" />
          <header>
            <p className="body-x-small text-white">
              Our mission is to assist organizations in transforming their data
              into values assets
            </p>
          </header>
        </article>
        <nav className="flex grow flex-col lg:basis-3/12">
          {items.map(({ id, name, href }) => (
            <NavLink
              id={id}
              key={id}
              // eslint-disable-next-line react/no-children-prop
              children={name}
              to={href}
              className="body-x-small flex items-center text-white"
            />
          ))}
        </nav>
        <article className="flex flex-col lg:basis-4/12">
          <header>
            <h4 className="header-3 text-white">
              Newsletter Signup
            </h4>
          </header>
          <p className="body-x-small mt-4 text-white">
            Sign up for updates and a newsletter from Peer Data about trends
            shaping markets, industries, and the global economy.
          </p>
          <InputButton
            className="mt-6 h-16 w-full"
            id="hero-signup"
            isPrimary={false}
            hasIcon={false}
            placeholder="Your company email"
            label="Sign up"
            onChange={() => {
              console.log("test");
            }}
            onClick={() => {
              console.log("test");
            }}
          />
        </article>
      </section>
    </footer>
  );
}

export default Footer;
