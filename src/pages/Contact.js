import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Modal from '../components/Modal.js'; 
import '../contactform.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a9jl199', 
        'template_dfuqm7n', 
        e.target,
        'EUE2coetnuOQWq8KW' 
      )
      .then(() => {
        setShowModal(true); 
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleSaveChanges = () => {
    alert('Changes saved!');
    handleCloseModal();
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} method="POST" className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {showModal && (
        <Modal
          title="Thank You!"
          body="We received your feedback. We will get back to you soon... 😊"
          onClose={handleCloseModal}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
}

export default Contact;
