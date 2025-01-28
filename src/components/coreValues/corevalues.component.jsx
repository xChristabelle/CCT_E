import { useState } from "react";
import classes from "./coreValues.module.css";

const CoreValues = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showMobileScroll, setShowMobileScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
    if (window.scrollY >= 1200) {
      setShowMobileScroll(true);
    } else {
      setShowMobileScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${classes.container} ${showScroll && classes.show} ${
        showMobileScroll && classes.mobileShow
      }`}
    >
      <h2>Core Values of CCT Electric</h2>
      <ul className={classes.values}>
        <li>
          <b>Sustainability:</b>Prioritizing renewable energy and electric
          mobility to create a greener future.
        </li>
        <li>
          <b>Innovation:</b> Delivering cutting-edge EV solutions through
          advanced technology and expertise.
        </li>
        <li>
          <b>Customer-Centric Approach </b> Ensuring personalized support and
          reliable service for every client.
        </li>
        <li>
          <b>Collaboration</b> Partnering with communities, businesses, and
          governments to drive EV adoption.
        </li>
        <il>
          <b>Quality Assurance</b> Ensuring reliable and efficient project
          management, maintenance, and technical support for all installations.
        </il>
      </ul>
    </div>
  );
};

export default CoreValues;
