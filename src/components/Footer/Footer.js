import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <img src={require("../images/me.png")} className="footer-img" />
        <br />© 2022. All rights reserved by Ajay Aggarwal.
      </div>
    </Container>
  );
};

export default Footer;
