import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
            <textarea 
              placeholder="Your Message" 
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>📧 Email: info@aarnalaxmi.com</p>
            <p>📞 Phone: +91 XXXXXXXXXX</p>
            <p>📍 Address: Your Address Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
