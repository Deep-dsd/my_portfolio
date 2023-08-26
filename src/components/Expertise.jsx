import { skills } from "../data";

const Expertise = () => {
  return (
    <section name="expertise" className="expertise-section">
      <section className="expertise-section-container">
        <header className="skills-section-header">
          <p className="section-header">Expertise</p>
          <p className="section-subheader">Technologies I'm proficient with</p>
        </header>
        <section className="experience-section">
          {skills.map((skill) => {
            const { id, img, percentage, name } = skill;
            return (
              <div className="experience-item" key={id}>
                <img src={img} alt={name} className="experience-img" />
                <div className="bar-section">
                  <p className="bar-info">
                    <span>{name}</span> | {percentage}%
                  </p>

                  <div className="experience-bar">
                    <span
                      style={{ width: `${percentage}%` }}
                      className="animate"
                    ></span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Expertise;
