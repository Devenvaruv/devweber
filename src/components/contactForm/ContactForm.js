import React from 'react';
import styles from './ContactForm.module.css';

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
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input className={styles.input} type="text" id="name" required />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input className={styles.input} type="email" id="email" required />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="subject">
            Subject
          </label>
          <input className={styles.input} id="subject" />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="message">
            Message (optional)
          </label>
          <textarea className={styles.input} id="message" />
        </div>
        <button className={styles.button} type="submit" disabled={formStatus === 'Submitting...'}>
          {formStatus}
        </button>
      </form>
    </div>
);

};

export default ContactForm;
