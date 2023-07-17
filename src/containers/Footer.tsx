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
    <footer className="flex flex-col bg-brand-deep-blue lg:gap-y-60">
      <section
        className={classNames(
          "block w-full pb-12 pt-24 lg:flex xl:justify-between",
          !className ? "" : className
        )}
      >
        <article className="lg:flex lg:basis-3/12 lg:flex-col xl:basis-3/12">
          <Icon className="text-white" name="logo" />
          <header>
            <p className="body-x-small mt-6 text-white">
              Our mission is to assist organizations in transforming their data
              into values assets
            </p>
          </header>
        </article>
        <nav className="block lg:flex lg:basis-2/12 lg:flex-col lg:gap-y-4 xl:basis-2/12">
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
        <article className="block lg:flex lg:grow lg:basis-3/12 lg:flex-col xl:grow-0 xl:basis-5/12">
          <header>
            <h4 className="body-x-small uppercase text-white">
              Newsletter Signup
            </h4>
          </header>
          <p className="body-x-small mt-4 text-white">
            Sign up for updates and a newsletter from Peer Data about trends
            shaping markets, industries, and the global economy.
          </p>
          <InputButton
            className="mt-8 h-16"
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
      <section
        className={classNames("flex gap-x-8 w-full mb-10", !className ? "" : className)}
      >
        <p className="body-x-small text-white">
          ©Peer Data Technology Copyright 2023
        </p>
        <p className="body-x-small text-white">All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
