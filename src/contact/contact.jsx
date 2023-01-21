/* eslint-disable import/no-duplicates */
import './contact.css';
import contactComponents from './contactInFor/ContactInfo';
import Heading from '../components/heading/Heading';
import Hero from '../components/hero/Hero';

function Contact() {
  return (
    <>
      <Hero text3="Tour Package" text4="Home" spanText="Tour Package" />
      <div className="contactBody">
        <Heading
          text3="Get in Touch"
          paragraph="We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don't hesitate to get in touch. We are always looking for ways to improve and make your travel experience even better."
        />
        <contactComponents.contactForm />
        <contactComponents.CreateContactCards />
      </div>
    </>
  );
}

export default Contact;
