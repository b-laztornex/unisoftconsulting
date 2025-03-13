import React, { useState, useEffect } from "react";
import "./StickyNavBar.css";

const StickyNavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const homeSection = document.getElementById("home");
      const navbar = document.getElementById("navbar");
      if (homeSection && navbar) {
        if (
          window.pageYOffset >
          homeSection.offsetHeight - navbar.offsetHeight
        ) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="logo">UNISOFT</div>
      <ul className="nav-menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#statistics">Statistics</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavBar;
