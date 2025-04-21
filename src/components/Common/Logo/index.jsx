import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4"
    >
      <img
        src="/images/logo/mLogo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
      />
      TechRise
    </Link>
  );
};

export default Logo;
