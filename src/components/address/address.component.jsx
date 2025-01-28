import { useState, useEffect } from "react";
import classes from "./address.module.css";

const Address = ({ isContactPage }) => {
  const [showSectionSlide, setShowSectionSlide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSectionSlide(window.scrollY >= 1600);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isContactPage ? classes.wrapper2 : classes.wrapper} ${
        showSectionSlide ? classes.showSlide : ""
      }`}
    >
      <h1 className={classes.title}>
        <span>How can we</span> Help you?
      </h1>
      <div className={classes.addressBox}>
        <h2>Address:</h2>
        <p>
          1527 19th St #410, Bakersfield, <br /> CA 93301
        </p>
      </div>
      <div className={classes.addressBox}>
        <h2>Office Hours:</h2>
        <p>
          Monday - Friday: 8 AM - 5 PM <br />
          Saturday: 10 AM - 3 PM <br />
          Sunday: Closed
        </p>
      </div>
      <div className={classes.addressBox}>
        <h2>Business Number:</h2>
        <p>855-500-5250</p>
      </div>
      <div className={classes.addressBox}>
        <h2>Email:</h2>
        <p>alan@cacleantransportation.com</p>
      </div>
    </div>
  );
};

export default Address;
