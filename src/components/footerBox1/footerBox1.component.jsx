import classes from "./footerBox1.module.css";

import { useHistory } from "react-router-dom";

import logo from "../../assets/logo-new.png";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterBox1 = () => {
  const history = useHistory();

  return (
    <div className={classes.box1}>
      <img
        src={logo}
        className={classes.logo}
        alt="logo"
        onClick={() => history.push("/")}
      />
      <p>
        CCT Electric provides clean, renewable energy solutions and specializes
        in installing advanced CCTV systems for residential, commercial, and
        industrial properties. Their high-definition cameras offer features like
        remote monitoring, motion detection, and cloud storage, ensuring
        comprehensive security and peace of mind.
      </p>
      <div className={classes.socialmediaBox}>
        <span>
          <BsFacebook className={classes.mediaIcons} />
        </span>
        <span>
          <AiFillInstagram className={classes.mediaIcons} />
        </span>
        <span>
          <IoLogoWhatsapp className={classes.mediaIcons} />
        </span>
      </div>
    </div>
  );
};

export default FooterBox1;
