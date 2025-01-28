import classes from "./servicesItem.module.css";

import { useHistory } from "react-router-dom";

import CustomButton from "../customButton/customButton";

const ServicesItem = ({ item }) => {
  const { title, imageUrl, linkUrl, whatsappUrl, noMargin, description } = item;
  const history = useHistory();

  return (
    <section className={`${classes.wrapper} ${noMargin && classes.noMargin}`}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <span style={{color: 'whitesmoke'}}>{title}</span>
         <p style={{fontSize: '0.8rem', color: 'whitesmoke', marginTop: '4rem'}}>{description}</p>
      </div>
      <div className={classes.buttonBox}>
        <CustomButton
          onClick={() => history.push(`services/${linkUrl}`)}
          isVisit
        >
          Contact Us
        </CustomButton>
        <a
          href={`${whatsappUrl}`}
          target="blank"
          className={classes.whatsappLink}
        >
          <CustomButton isGetToUs>Call Now</CustomButton>
        </a>
      </div>
    </section>
  );
};

export default ServicesItem;
