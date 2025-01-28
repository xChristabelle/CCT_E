import classes from "./missionVision.module.css";

import Title from "../titleComponent/title.component";
import CoreValues from "../coreValues/corevalues.component";
import MissionVisionContainer from "../mission/mission.component";

const MissionVision = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading="our" title="mission and vision" isAboutPage />
      <div className={classes.container}>
        <CoreValues />
        <MissionVisionContainer
          title="our mission at CCT Electric"
          mission="At CCT Electric, our mission is to lead the charge in advancing sustainable energy solutions. We are committed to empowering our clients with cutting-edge electrical services that enhance energy efficiency and foster environmental stewardship. Through our expertise in solar energy, EV infrastructure, and smart technologies, we strive to provide tailored, high-performance solutions that meet the evolving energy needs of businesses and homeowners alike.

We are dedicated to promoting a cleaner, greener future by offering reliable, innovative, and customer-centric services that help reduce carbon footprints while maximizing energy savings. At CCT Electric, we don’t just deliver power — we deliver a lasting impact on the planet, ensuring a brighter, more sustainable world for generations to come."
          isMission
        />
        <MissionVisionContainer
          title="our vision CCT Electric"
          mission="Our vision at CCT Electric is to become a leading force in shaping a sustainable energy future. We aim to be the go-to provider of innovative and eco-friendly electrical solutions that help transform the way people and businesses access and use energy. By embracing cutting-edge technologies and sustainable practices, we envision a world where clean energy is the norm, and the environmental impact of energy consumption is minimized.

We are driven by the belief that every home, business, and community deserves access to reliable, affordable, and renewable energy. Through continuous innovation, exceptional customer service, and a commitment to sustainability, we aspire to make energy efficiency and environmental responsibility accessible to all, creating a positive legacy for future generations."
          isVision
        />
      </div>
    </section>
  );
};

export default MissionVision;
