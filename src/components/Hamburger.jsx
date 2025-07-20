"use client";

import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

export default function HamburgerMenu({ onToggle }) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setOpen(newState);
    onToggle(newState);
  };

  return <Hamburger toggled={isOpen} toggle={handleToggle} />;
}
