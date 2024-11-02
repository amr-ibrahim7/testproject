import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", name: "الرئيسية" },
  { path: "/about", name: "من نحن" },
  { path: "/projects", name: "خدماتنا" },
  { path: "/contact", name: "تواصل معنا" },
  // { path: "/gallery", name: "المعرض" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const location = useLocation();
  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === activeLink;
        return (
          <Link
            to={link.path}
            key={index}
            className={`${linkStyles}`}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
