import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <Link to="home" spy={true} smooth={true} offset={-15} duration={500}>
          <h1 className="nav-logo">Deep</h1>
        </Link>
      </div>

      <ul className="nav-links">
        {links.map((singleLink) => {
          const { link, id } = singleLink;
          return (
            <li className="nav-link" key={id}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="hamburger"
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        {isHamburgerOpen ? (
          <FaTimes style={{ fontSize: "30px" }} />
        ) : (
          <FaBars style={{ fontSize: "30px" }} />
        )}
      </div>
      {isHamburgerOpen && (
        <ul className="hamburger-menu">
          {links.map(({ link, id }) => {
            return (
              <li className="hamburger-menu-items" key={id}>
                <Link
                  onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-15}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
