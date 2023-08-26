import React from "react";
import { projects } from "../data";
import { BiCodeAlt } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  return (
    <section name="projects" className="projects-section ">
      <section className="projects-section-container ">
        <header className="projects-section-header">
          <p className="section-header">Portfolio</p>
          <p className="section-subheader">
            Check out some of my work right here
          </p>
        </header>
        <section className="project-card-section">
          {projects.map((project) => {
            const { id, img, techStack, demoLink, codeLink } = project;
            return (
              <div className="project-card" key={id}>
                <img
                  src={img}
                  alt="Project Thumbnail"
                  className="project-card-img"
                />
                <p>
                  Tech Stack:
                  <span>
                    {techStack.map((item, i, arr) => {
                      if (i === arr.length - 1) {
                        return ` ${item}`;
                      } else {
                        return ` ${item} | `;
                      }
                    })}
                  </span>
                </p>
                <footer className="project-card-footer">
                  <a
                    href={demoLink}
                    target="_blank"
                    className="project-card-btn"
                  >
                    Demo
                    <span>
                      <CiShare1 />
                    </span>
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    className="project-card-btn"
                  >
                    Code
                    <span>
                      <BiCodeAlt />
                    </span>
                  </a>
                </footer>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Projects;
