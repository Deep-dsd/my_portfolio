import React from "react";
import contactImg from "../assets/contactMe.png";
const Contact = () => {
  return (
    <section name="contact" className="contact-section">
      <section className="contact-section-container">
        <header className="contact-section-header">
          <p className="section-header">Contact</p>
          <p className="section-subheader">Get in Touch with me</p>
        </header>
        <section className="contact-img-form-section">
          <figure className="contact-img-container">
            <img src={contactImg} alt="contact me" className="contact-img" />
          </figure>
          <form
            action="https://getform.io/f/52edb42d-976f-468e-9ec7-e741a9d38b73"
            method="POST"
            className="form-section"
          >
            <div className="form-input">
              <input type="text" placeholder="YOUR NAME" required name="name" />
              <input
                type="email"
                name="email"
                required
                placeholder="YOUR EMAIL"
              />
            </div>
            <input
              type="text"
              placeholder="ENTER SUBJECT"
              required
              name="subject"
            />

            <textarea
              required
              rows="5"
              className="textarea"
              name="msg"
            ></textarea>

            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Contact;
