import React from "react";
import "../styles/Footer.scss";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="copyright">Created by Michał Łysakowski</span>
      <Icons />
    </footer>
  );
};

export default Footer;
