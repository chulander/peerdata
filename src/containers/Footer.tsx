import { Icon } from "../components/Icon";
import { NavItem } from "../components/NavItem";
import { classNames } from "../utils";

export interface Footer {
  className?: string;
  items: NavItem[];
}

export function Footer({ className, items }: Footer) {
  return (
    <footer className="flex bg-brand-deep-blue">
      <div
        className={classNames("flex pb-12 pt-24", !className ? "" : className)}
      >
        <section>
          <Icon className="text-white" name="logo" />
          <p className="body-x-small text-white">
            Our mission is to assist organizations in transforming their data
            into values assets
          </p>
        </section>
        <section>
          {items.map(({ id, name, href, isCTA }) =>
            !isCTA ? (
              <NavItem
                id={id}
                key={id}
                // eslint-disable-next-line react/no-children-prop
                children={name}
                to={href}
                className={({ isActive, isPending }) =>
                  classNames(
                    "body-x-small flex items-center ",
                    isActive ? "" : ""
                  )
                }
              />
            ) : (
              <NavItem
                id={id}
                key={id}
                to={href}
                target="_blank"
                className={({ isActive, isPending }) =>
                  classNames(
                    "button-secondary flex items-center justify-between space-x-16 py-2 pl-3 pr-1",
                    isActive ? "" : ""
                  )
                }
              >
                <span className="body-x-small text-black">{name}</span>
                <span className="block">
                  <Icon
                    className="-mr2 w-8"
                    name="header-calendar"
                    aria-hidden="true"
                  />
                </span>
              </NavItem>
            )
          )}
        </section>
      </div>
    </footer>
  );
}

export default Footer;
