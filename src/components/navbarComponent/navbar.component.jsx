import { useState } from "react";
import classes from "./navbar.module.css";

import { useHistory } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import logo from "../../assets/logo-new.png";

import NavbarOptions from "../navbarOpions/navOptions.component";
import MobileNavbar from "../mobileNavbar/mobileNavbar.component";
import Subsidiaries from "../subsidiaries/subsidiaries.component";

import { selectToggleNavbar } from "../../redux/navToggle/navToggleSelector";
import { handleToggleNavbar } from "../../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Navbar = ({ setShowNavbar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const history = useHistory();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={classes.wrapper}>
      <div
        className={`${classes.container} ${scrollNav ? classes.scroll : ""}`}
      >
        <img
          src={logo}
          className={classes.logo}
          alt="logo"
          onClick={() => history.push("/")}
        />
        <NavbarOptions />
        <div
          className={classes.handBurggerBox}
          onClick={() => {
            setShowNavbar();
            handleScrollTop();
          }}
        >
          <FaBars
            className={`${classes.icon} ${scrollNav ? classes.change : ""}`}
          />
        </div>
      </div>
      <MobileNavbar />
      <Subsidiaries />
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  showNavbar: selectToggleNavbar,
});
const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
