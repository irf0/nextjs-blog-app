import Link from "next/link";
import React from "react";
import Switch from "@mui/material/Switch";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="w-full h-16 font-carter-one flex items-center border-b border-gray-500 justify-between sm:justify-around">
      <Link href="/">
        <h1
          className={
            isDarkMode
              ? "text-xl font-bold flex items-center mx-6"
              : "text-xl font-bold flex items-center mx-6 text-gray-800"
          }
        >
          <span className="bg-yellow-300 rounded-sm p-0.5">Dev</span>
          Speaks
        </h1>
      </Link>
      <div className="flex">
        <h1>{isDarkMode ? "🌞" : "🌙"}</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          <Switch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
