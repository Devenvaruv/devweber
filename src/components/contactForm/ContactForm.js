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
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="">
          <label className="form-label" htmlFor="name">
            Name  (required)
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email (required)
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input className="form-control" id="subject"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message (optional)
          </label>
          <textarea className="form-control" id="message"/>
        </div>
        <button className="btn btn-danger" type="submit" disabled={formStatus === 'Submitting...'}>
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
