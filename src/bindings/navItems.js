import { UnderlineButton } from "components-react-lib";
import React from "react";

const navItems = [
  {
    content: "buttons",
    link: "buttons",
  },
  {
    content: "dropdown",
    link: "dropdown",
  },
  {
    content: "navigation",
    link: "navigation",
  },
  {
    content: "useMediaQ",
    link: "useMediaQ",
  },
  {
    content: <UnderlineButton>useLog</UnderlineButton>,
    hamburgerContent: "useLog",
    link: "uselog",
  },
];

export default navItems;
