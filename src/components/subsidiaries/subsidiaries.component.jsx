import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectToggleSubsidiary,
} from "../../redux/navToggle/navToggleSelector";
import {
  handleToggleNavbar,
  handleToggleSubsidiary,
} from "../../redux/navToggle/navToggleAction";

import classes from "./subsidiaries.module.css";

const Subsidiaries = ({
  showSubsidiary,
  isMobile,
  setShowNavbar,
  setShowSubsidiary,
  showdropDown,
}) => {
  const history = useHistory();

  const navigateTo = (path) => {
    setShowNavbar();
    history.push(path);
  };

  const services = [
    {
      label: "Innovation & Sustainability Advocacy",
      path: "/services/solarinstallations",
    },
    {
      label: "EV Charger Installations",
      path: "/services/CCTVinstallations",
    },
    {
      label: "Fleet Electrification",
      path: "/services/generalhousewiring",
    },
    {
      label: "Consulting Services",
      path: "/services/partnership",
    },
  ];

  return (
    <div
      className={`${classes.container} ${showdropDown ? classes.show : ""} ${
        isMobile ? classes.mobileShowContainer : ""
      }`}
    >
      {services.map((service, index) => (
        <div key={index}>
          <div
            className={classes.link}
            onClick={() => navigateTo(service.path)}
          >
            {service.label}
          </div>
          {index < services.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  showSubsidiary: selectToggleSubsidiary,
});

const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
  setShowSubsidiary: () => dispatch(handleToggleSubsidiary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subsidiaries);
