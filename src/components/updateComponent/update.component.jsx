import classes from "./update.module.css";

const Update = () => {
  const services = [
    "EV Charger Installations",
    "Fleet Electrification",
    "Site Assessments",
    "Project Management",
    "Consulting Services",
    "Maintenance & Support",
    "Training & Workforce Development",
    "Partnership Development",
    "Community Outreach",
    "Innovation & Sustainability Advocacy",
  ];

  return (
    <section className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>LATEST UPDATE</h3>
        <div className={classes.innerWrapper}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={classes.animationContainer}>
                {services.map((service, idx) => (
                  <span key={idx} className={classes.list}>
                    {service}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Update;
