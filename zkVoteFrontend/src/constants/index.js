import {
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    //Dashboard
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    //Personal wallet
    name: "payment",
    imgUrl: payment,
    link: "/wallet",
  },
  {
    //Pay TAX and Receive TAX TOKEN
    name: "Pay TAX",
    imgUrl: withdraw,
    link: "/transaction",
  },
  {
    //User profile
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
];
