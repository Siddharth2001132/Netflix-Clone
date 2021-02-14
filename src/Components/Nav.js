import React, { useEffect, useState } from "react";
import "./Nav.css";
import Avatar from "../assets/avatar.png";
import NetflixLogo from "../assets/Netflix_logo.png";

function Nav(props) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < 100) {
          handleShow(false);
        } else handleShow(true);
      });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLogo} alt="Netflix Logo" />
      <img className="nav_avatar" src={Avatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
