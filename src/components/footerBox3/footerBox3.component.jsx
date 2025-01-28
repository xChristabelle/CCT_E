import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

import classes from "./footerBox3.module.css";

const FooterBox3 = () => {
  return (
    <div className={classes.box3}>
      <h2>Contact Info</h2>
      <div className={classes.address}>
        <div className={classes.infoBox}>
          <BsTelephone className={classes.icon} />
          <span>855-500-5250</span>
        </div>
        <div className={classes.infoBox}>
          <HiOutlineMail className={classes.icon} />
          <span>alan@cacleantransportation.com</span>
        </div>
        <div className={classes.infoBox}>
          <GrLocation className={classes.icon} />
          <span>
            1527 19th St #410 Bakersfield, <br />
            CA 93301
          </span>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.6634709288243!2d-119.03337418476446!3d35.3792659802741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6c03784c460f%3A0x4e8a4e9d76c58044!2s1527%2019th%20St%20%23410%2C%20Bakersfield%2C%20CA%2093301%2C%20USA!5e0!3m2!1sen!2sph!4v1699615698952!5m2!1sen!2sph"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterBox3;
