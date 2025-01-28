import classes from "./contactForm.module.css";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { handleSubmitForm } from "../../redux/navToggle/navToggleAction";

const ContactForm = ({ isContactPage, setSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [showSectionSlide, setShowSectionSlide] = useState(false);
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const handleScroll = () => {
      setShowSectionSlide(window.scrollY >= 1600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setSuccess(true);
    } catch (error) {
      console.error("Email sending failed:", error.text);
    }
    setFormData({ name: "", email: "", title: "", message: "" });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSendEmail}
      className={`${isContactPage ? classes.container2 : classes.container} ${
        showSectionSlide ? classes.showSlide : ""
      }`}
    >
      <div className={classes.nameEmail}>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          isSmall
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          isSmall
        />
      </div>
      <FormInput
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message body"
        value={formData.message}
        onChange={handleChange}
        required
        className={classes.messages}
      />
      <CustomButton type="submit" isSubmit>
        Submit
      </CustomButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (status) => dispatch(handleSubmitForm(status)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
