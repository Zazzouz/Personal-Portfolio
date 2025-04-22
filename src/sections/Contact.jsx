import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      console.log(formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <p className="thank-you">Thank you! I’ll get back to you soon.</p>
      )}
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:youremail@example.com">Email Me</a>
      </div>
    </div>
  );
}

export default Contact;
