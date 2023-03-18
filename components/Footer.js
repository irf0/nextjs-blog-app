import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-10 font-Montserrat font-semibold w-full shadow-lg flex justify-center items-center text-center">
        <p>
          This Blog App was made with Excitement, Anxiety,and with{" "}
          <span className="text-red-600">❤</span> by{" "}
          <Link href="https://dev-irfan.vercel.app/" target="_blank">
            <span className="underline">dev_Irfan</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
