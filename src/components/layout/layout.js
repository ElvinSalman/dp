import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../footer/footer";
export default function LayoutOne(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
}
