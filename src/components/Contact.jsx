import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// THE FIX: FaExclamationCircle is replaced with FaTriangleExclamation
import { FaCircleCheck, FaTriangleExclamation } from 'react-icons/fa6'; 
import './Contact.css';

const Contact = () => {
  // State to hold all form data in a single object
  const [status, setStatus] = useState('idle');

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    
    formData.append("access_key", "68f7100c-97d3-47bc-b8b6-20cc83152b6b"); 
    
    const selectedSubject = formData.get('subject');
    formData.append("subject", `New message from Hashtag Website: ${selectedSubject}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset(); // Clear the form fields
      } else {
        console.error("Error from Web3Forms:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  const renderContent = () => {
    switch (status) {
      case 'success':
        return (
          <motion.div
            key="success"
            className="success-message-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCircleCheck className="success-icon" />
            <h2 className="success-title">Message Sent!</h2>
            <p className="success-text">Thank you for reaching out. We'll get back to you soon.</p>
            <button onClick={() => setStatus('idle')} className="new-form-button">
              Send Another Message
            </button>
          </motion.div>
        );
      case 'error':
        return (
          <motion.div
            key="error"
            className="success-message-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Using the corrected icon name here */}
            <FaTriangleExclamation className="error-icon" />
            <h2 className="success-title">Something went wrong!</h2>
            <p className="success-text">Please try again or contact us directly.</p>
            <button onClick={() => setStatus('idle')} className="new-form-button">
              Try Again
            </button>
          </motion.div>
        );
      default:
        return (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" id="fullName" name="name" className="form-input" placeholder="e.g., Jane Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <select id="subject" name="subject" className="form-input" defaultValue="Join Hashtag" required>
                <option value="Join Hashtag">Join Hashtag</option>
                <option value="Sponsorship related">Sponsorship related</option>
                <option value="Feedback">Feedback</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        );
    }
  };

  return (
    <div className="new-page-container contact-page">
      <h1 className="new-page-main-title">Get in Touch</h1>
      <p className="page-subtitle">Have a question or a proposal? We’d love to hear from you.</p>

      <div className="contact-form-wrapper">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
