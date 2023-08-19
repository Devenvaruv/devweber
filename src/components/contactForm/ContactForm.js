import React from 'react';
import './ContactForm.module.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    
    console.log(conFom);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-input" type="email" id="email" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input className="form-input" id="subject" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message (optional)
          </label>
          <textarea className="form-input" id="message" />
        </div>
        <button className="form-button" type="submit" disabled={formStatus === 'Submitting...'}>
          {formStatus}
        </button>
      </form>
    </div>
);

};

export default ContactForm;
