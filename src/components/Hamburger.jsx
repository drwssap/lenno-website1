"use client";

import { Divide as Hamburger } from "hamburger-react";

export default function HamburgerMenu({ toggled, toggle }) {
  return <Hamburger toggled={toggled} toggle={toggle} />;
}
