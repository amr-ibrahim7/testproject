import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Mobilenavigation from "./Mobilenavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [header, setHeader] = useState(false);
  const scrollYRef = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && scrollYRef.current <= 50) {
        setHeader(true);
      } else if (currentScrollY <= 50 && scrollYRef.current > 50) {
        setHeader(false);
      }
      scrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-tertiary shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        location.pathname === "/" && "bg-[#fff]  "
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover-text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
