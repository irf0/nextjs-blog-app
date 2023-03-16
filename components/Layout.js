import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Head>
        <title>DevSpeaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
