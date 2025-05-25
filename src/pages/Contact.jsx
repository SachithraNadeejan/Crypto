const Contact = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Your name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea placeholder="Your message" />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
