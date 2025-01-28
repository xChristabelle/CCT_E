import { useState } from 'react';
import classes from './servicesSection.module.css';

import { servicesData } from './servicesData';
import ServicesItem from '../servicesItems/servicesItem.component';

import Title from '../titleComponent/title.component';
import CustomButton from '../customButton/customButton';

const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8); // State to manage visible items
  const totalServices = servicesData.length;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Show 8 more items on click
  };

  return (
    <section className={classes.wrapper}>
      <Title heading={"our"} title={"services"} isService />
      <div className={classes.servicesBox}>
        {servicesData.slice(0, visibleCount).map((item) => {
          return <ServicesItem key={item.id} item={item} />;
        })}
      </div>
      {visibleCount < totalServices && ( // Show button only if there are more items to display
      <div className={classes.showMoreButton}>
        <CustomButton onClick={handleShowMore}>
          Show More
        </CustomButton>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
