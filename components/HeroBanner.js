import React from "react";

const HeroBanner = () => {
  return (
    <div className="sm:px-3 w-full h-80 sm:h-64 bg-yellow-400 flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Welcome to DevSpeaks,</h1>
      <p className="font-semibold sm:font-normal">
        I am an obsessed developer and a tech enthusiast. Here I write about
        Coding, Tech, Money, Recent Industry Trends, Stratups and many more...
      </p>
    </div>
  );
};

export default HeroBanner;
