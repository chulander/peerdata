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
          <Icon className="text-brand-light-background" name="logo" />
          <header>
            <p className="text-md mt-6 font-thin tracking-normal text-brand-light-background">
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
              className="text-md flex items-center font-thin tracking-normal text-brand-light-background"
            />
          ))}
        </nav>
        <article className="block lg:flex lg:grow lg:basis-3/12 lg:flex-col xl:grow-0 xl:basis-5/12">
          <header>
            <h4 className="text-md font-thin uppercase tracking-wide text-brand-light-background">
              Newsletter Signup
            </h4>
          </header>
          <p className="text-md mt-2 font-thin text-brand-light-background">
            Stay up to date with the latest news and trends in data. Sign up to
            the PEER DATA Newsletter, where we cover datasets, technology, and
            company news.
          </p>
          <InputButton
            className="mt-8 h-16 w-full text-[1.35rem]"
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
        className={classNames(
          "mb-14 flex w-full gap-x-8",
          !className ? "" : className
        )}
      >
        <p className="text-lg font-thin tracking-wide text-brand-light-background">
          ©Peer Data Inc. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
