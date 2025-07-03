import React, { useState, useEffect } from "react";
import "./StickyNavBar.css";

interface StickyNavBarProps {
  activeHomePage: boolean;
  setActiveHomePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const StickyNavBar: React.FC<StickyNavBarProps> = ({
  activeHomePage,
  setActiveHomePage,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const homeSection = document.getElementById("home");
      const navbar = document.getElementById("navbar");
      if (homeSection && navbar) {
        setScrolled(
          window.pageYOffset > homeSection.offsetHeight - navbar.offsetHeight
        );
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
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="logo">UNISOFT</div>
      <ul className="nav-menu">
        {activeHomePage ? (
          <>
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
              <a
                href="#clients"
                onClick={(e) => handleSmoothScroll(e, "clients")}
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={() => {
                  setActiveHomePage(false);
                }}
              >
                Blog
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setActiveHomePage(true);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <button
                className="ml-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setActiveHomePage(true)}
              >
                GO BACK
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default StickyNavBar;
