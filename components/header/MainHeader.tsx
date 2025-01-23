"use client";

import React, { useEffect, useState } from "react";
import NavContainer from "./NavContainer";

const MainHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-white" : "bg-white md:bg-transparent"
      } transition-all duration-1000 ease-in-out py-2`}
    >
      <NavContainer scrolled={scrolled} />
    </header>
  );
};

export default MainHeader;
