import React from "react";

import Header from "./header/";
import Footer from "./footer/";

import "./style.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="site-content site-content-wrapper">{children}</main>
      <Footer />
    </>
  );
}
