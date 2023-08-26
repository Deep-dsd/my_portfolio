import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section name="home" className="home-section">
      <article className="home-section-info">
        <h2 className="home-info-heading">
          I'm a Web <span>Developer</span>
        </h2>
        <p className="home-info-para">
          I'm a novice web developer, proficient in React, JavaScript, CSS, and
          HTML. I specialize in building dynamic and visually appealing
          websites, bringing creativity and functionality together seamlessly.
        </p>
        <article className="btns">
          <Link
            className="projects-btn btn"
            to="projects"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            Projects
            <span className="rotating-fa">
              <MdKeyboardArrowRight className="projects-btn-fa" />
            </span>
          </Link>
          <a href="/cv/my_resume.pdf" download>
            <button className=" cv-btn" datatype="Download CV"></button>
          </a>
        </article>
      </article>

      <figure>
        <img src={heroImage} alt="My Profile" className="home-section-image" />
      </figure>
    </section>
  );
};

export default Home;
