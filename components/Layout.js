import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { getPosts } from "../services";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children, post, isDarkMode, setIsDarkMode }) => {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug ? `${slug}` : "Dev Speaks";
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover the latest insights and perspectives on web development with our blog. Get expert tips, tutorials, and news on building fast, scalable, and modern web applications"
        />
        <meta
          name="google-site-verification"
          content="vpKDHLC6XQkarWKakUk3FAhVr-hBZ55BX_cY_fllyF4"
        />
      </Head>

      <header>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      <main>{children}</main>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
export default Layout;
