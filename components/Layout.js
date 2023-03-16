import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Head>
        <title>DevSpeaks</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover the latest insights and perspectives on web development with our blog. Get expert tips, tutorials, and news on building fast, scalable, and modern web applications"
        />
      </Head>

      <header>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
