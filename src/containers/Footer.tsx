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
    <footer className="flex flex-col bg-brand-deep-blue">
      <section
        className={classNames(
          "block w-full lg:flex xl:justify-between",
          !className ? "" : className
        )}
      >
        <article className="lg:flex lg:basis-3/12 lg:flex-col xl:basis-3/12">
          <Icon
            className="h-10 w-52 fill-white text-brand-light-background"
            name="logo"
          />
          <header>
            <p className="text-md mt-6 font-thin tracking-normal text-brand-light-background">
              Peer Data is a data capitalization technology firm, founded to
              enable data owners and providers to transform their data into
              assets.
            </p>
          </header>
        </article>
        <nav className="mt-10 block lg:mt-0 lg:flex lg:basis-2/12 lg:flex-col lg:gap-y-4 xl:basis-2/12">
          {items.map(({ id, name, href, target }) => (
            <NavLink
              id={id}
              key={id}
              target={target}
              // eslint-disable-next-line react/no-children-prop
              children={name}
              to={href}
              className="focus text-md flex items-center font-thin tracking-normal text-brand-light-background"
            />
          ))}
        </nav>
        <article className="mt-10 block lg:mt-0 lg:flex lg:grow lg:basis-3/12 lg:flex-col xl:grow-0 xl:basis-5/12">
          <header>
            <h4 className="lg:text-md font-thin uppercase tracking-wide text-brand-light-background">
              Newsletter Signup
            </h4>
          </header>
          <p className="text-md mt-2 font-thin text-brand-light-background">
            Stay up to date with the latest news and trends in data. Sign up to
            the Peer Data Newsletter, where we cover datasets, technology, and
            company news.
          </p>
          <InputButton
            className="mt-8 h-16 w-full text-[1.35rem]"
            buttonClass="bg-brand-light-background"
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
          "flex w-full gap-x-8",
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
