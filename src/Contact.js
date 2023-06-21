import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        If you would like to get in touch with me, feel free to reach out using the contact information below or by filling out the contact form.
      </p>
      <div className="contact-info">
        <p>Email: rtthomas@ucsc.edu</p>
        <p>Phone: +1 408-431-9817</p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
