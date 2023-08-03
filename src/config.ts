import { NavItem } from "./containers/Nav";
export type RouteConfigType = {
  [key: string]: NavItem;
};
export const internalRoutes: RouteConfigType = {
  home: {
    href: "/",
    id: "home",
    name: "Home",
  },
  company: {
    href: "/company",
    id: "company",
    name: "Company",
  },
  contact: {
    href: "/contact",
    id: "contact",
    name: "Contact us",
  },
  privacy: {
    href: "/privacy-policy",
    id: "privacy-policy-footer",
    name: "Privacy Policy",
  },
};

export const externalRoutes: RouteConfigType = {
  linkedin: {
    href: "https://www.linkedin.com/company/peer-data",
    id: "linkedin",
    name: "LinkedIn",
  },
  careers: {
    href: "https://peerdata.applytojob.com/apply",
    id: "careers",
    name: "Careers",
  },
  waitlist: {
    href: "https://ziessxud13f.typeform.com/to/O9Jgo0W3",
    id: "waitlist",
    name: "Partner with us",
  },
  mailbox: {
    href: "contact@peerdata.tech",
    id: "peerdata-mailbox",
    name: "Contact us",
  },
};
export const navItems: NavItem[] = [
  {
    href: internalRoutes["company"].href,
    id: `${internalRoutes["company"].id}-nav`,
    name: internalRoutes["company"].name,
  },
  {
    href: internalRoutes["contact"].href,
    id: `${internalRoutes["contact"].id}-nav`,
    name: internalRoutes["contact"].name,
  },
  {
    href: externalRoutes["waitlist"].href,
    id: `${externalRoutes["waitlist"].id}-nav`,
    name: externalRoutes["waitlist"].name,
    isCTA: true,
  },
];

export const footerItems: NavItem[] = [
  {
    href: internalRoutes["company"].href,
    id: `${internalRoutes["company"].id}-footer`,
    name: internalRoutes["company"].name,
  },
  {
    href: externalRoutes["careers"].href,
    id: `${externalRoutes["careers"].id}-footer`,
    name: externalRoutes["careers"].name,
    target: "_blank",
  },
  {
    href: internalRoutes["contact"].href,
    id: `${internalRoutes["contact"].id}-footer`,
    name: internalRoutes["contact"].name,
  },
  {
    href: externalRoutes["linkedin"].href,
    id: `${externalRoutes["linkedin"].id}-footer`,
    name: externalRoutes["linkedin"].name,
    target: "_blank",
  },
  {
    href: externalRoutes["waitlist"].href,
    id: `${externalRoutes["waitlist"].id}-footer`,
    name: externalRoutes["waitlist"].name,
    target: "_blank",
  },
];

export const tiers: { id: string; name: string }[] = [
  {
    name: "Data Owner",
    id: "data-owner",
  },
  {
    name: "Data Consumer",
    id: "data-consumer",
  },
  {
    name: "Data Investor",
    id: "data-investor",
  },
];
// export const personas = [
//   {
//     name: "Data Owner",
//     id: "data-owner",
//     href: "/contact",
//     description:
//       "Turn your data into assets. We provide tools to guide you through your data monetization journey, to unlock maximum value and amplify reach.",
//     cta: "Contact Us",
//     image: "https://media.graphassets.com/ZR4pkoNwRvyFCOVbVpeH",
//   },
//   {
//     name: "Data Consumer",
//     id: "data-consumer",
//     href: "/contact",
//     description:
//       "Reduce time to context, objective assessment of data quality and improve the data discovery process.",
//     cta: "Contact Us",
//     image: "https://media.graphassets.com/z6MgBBtHS2rwKEIrAQoQ",
//   },
//   {
//     name: "Data Investor",
//     id: "data-investor",
//     href: "/contact",
//     description: "Invest in the essential commodity powering the data economy.",
//     cta: "Contact Us",
//     image: "https://media.graphassets.com/DhI5g0FQZug56y6hWcXn",
//   },
// ];
