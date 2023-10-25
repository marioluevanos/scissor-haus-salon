import { IMenuItem, IMobileType } from "@/types/menu-d-type";

export const menuLinks: IMenuItem[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/about",
    title: "About Us",
  },
  // {
  //   id: 3,
  //   link: "/stylist",
  //   title: "Stylists",
  // },
  // {
  //   id: 3,
  //   link: "/contact",
  //   title: "Contact",
  // },
];

// mobile menu data
export const menuLinksCondensed: IMobileType[] = menuLinks;
