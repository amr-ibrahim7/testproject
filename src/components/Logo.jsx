import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" aria-label="Home">
      <img src="../image/logo.png" width={160} height={55} alt="Company logo" />
    </Link>
  );
};

export default Logo;
