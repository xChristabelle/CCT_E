import classes from "./footerBox2.module.css";
import { useHistory } from "react-router-dom";

const FooterBox2 = () => {
  const history = useHistory();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "EV Charger Installations", path: "/services/solarinstallations" },
    { label: "Project Management", path: "/services/CCTVinstallations" },
    { label: "Consulting Services", path: "/services/generalhousewiring" },
    { label: "Partnership Development", path: "/services/partnership" },
    { label: "Contact Us", path: "/contactus" },
  ];

  return (
    <div className={classes.box2}>
      <h2>Quick Links</h2>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              history.push(link.path);
              handleScrollTop();
            }}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBox2;
