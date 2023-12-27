import { IMenuItem, IMobileType } from "@/types/menu-d-type";

export const menuLinks: IMenuItem[] = [
  {
    id: 2,
    link: "/about",
    title: "About Us",
  },
  {
    id: 3,
    link: "/services",
    title: "Our Services",
  },
  // {
  //   id: 3,
  //   link: "/contact",
  //   title: "Contact",
  // },
];

// mobile menu data
export const menuLinksCondensed: IMobileType[] = menuLinks;
