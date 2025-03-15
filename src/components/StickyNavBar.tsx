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

  // Smooth scroll function
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault(); // Prevent default anchor behavior

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="logo">UNISOFT</div>
      <ul className="nav-menu">
        <li>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portafolio"
            onClick={(e) => handleSmoothScroll(e, "portafolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="#clients" onClick={(e) => handleSmoothScroll(e, "clients")}>
            Clients
          </a>
        </li>
        <li>
          <a href="#work" onClick={(e) => handleSmoothScroll(e, "work")}>
            Work
          </a>
        </li>
        <li>
          <a
            href="#statistics"
            onClick={(e) => handleSmoothScroll(e, "statistics")}
          >
            Statistics
          </a>
        </li>
        <li>
          <a href="#blog" onClick={(e) => handleSmoothScroll(e, "blog")}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavBar;
