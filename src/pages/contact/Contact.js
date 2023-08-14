import './Contact.css';
import ContactForm from '../../components/contactForm/ContactForm';

function Contact() {
  return (
    <div className='Main-Container'>
      <div className='Sub-Container'>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congu.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contact;