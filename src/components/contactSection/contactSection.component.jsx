import classes from "./contactSection.module.css";

import Title from "../titleComponent/title.component";
import ContactForm from "../contactForm/contactForm.component";
import Address from "../address/address.component";

const ContactSection = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading="Get" title="to us" isContact />
      <div className={classes.contactBox}>
        <Address isContactPage />
        <ContactForm isContactPage />
      </div>
    </section>
  );
};

export default ContactSection;
