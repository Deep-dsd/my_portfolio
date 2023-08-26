import React from "react";
import { socialLinks } from "../data";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer-section">
      <Link to="home" spy={true} smooth={true} offset={-15} duration={500}>
        <h4 className="footer-text">May the Force be with you</h4>
      </Link>
      <section className="social-links-container">
        <ul className="social-links">
          {socialLinks.map(({ id, link, icon, download, title }) => {
            return (
              <li key={id} className="social-link">
                <a
                  href={link}
                  target="_blank"
                  download={download}
                  title={title}
                  rel="noreferrer"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
