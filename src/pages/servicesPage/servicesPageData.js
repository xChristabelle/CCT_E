import electrical from "../../assets/electricalWiring.jpg";
import solar from "../../assets/solarField.avif";
import cctv from "../../assets/cctvFix.jpg";
import partnership from "../../assets/partnership.avif";
import cctvAd from "../../assets/cctvad.png";
import floodLight from "../../assets/floodLight.png";
import solar1 from "../../assets/solar.png";
import solar2 from "../../assets/solar1.png";
import solarBattery from "../../assets/solarBattery.png";
import charger from "../../assets/solarcharger.png";
import solarr from "../../assets/solarr.png";
import solarTraining from "../../assets/solarTraining.png";
import training from "../../assets/training.png";
import cctvTraining from "../../assets/solartrainingAd.png";

export const servicesPageData = {
  EVchargerinstallations: {
    id: 1,
    title: "EV Charger Installations",
    routeName: "EVchargerinstallations",
    backgroundImage: `https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    info: ` California Clean Transportation specializes in installing Level 2 and Level 3 (DC fast) charging stations for residential, commercial, and public applications.
`,
    services: [
      "EV Charger Installations: Expert installation of Level 2 and Level 3 (DC fast) EV charging stations tailored for residential, commercial, and public spaces, ensuring optimal performance and compliance with safety standards.",
      "Sales of EV Charging Equipment: High-quality chargers, cables, and accessories to support diverse electric vehicle needs.",
      "EV Charger Maintenance: Comprehensive maintenance services, including diagnostics and repairs, to ensure reliable and efficient operation.",
      "EV Charger Installation Training: Practical, hands-on training to equip individuals and teams with the knowledge and skills required for professional EV charger installations.",
    ],
    photoGallery: [
      'https://images.pexels.com/photos/9800028/pexels-photo-9800028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9800033/pexels-photo-9800033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9799724/pexels-photo-9799724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9800030/pexels-photo-9800030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9799999/pexels-photo-9799999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9799997/pexels-photo-9799997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  CCTEProjectManagement: {
    id: 2,
    title: "CT Electric Project Management",
    routeName: "CCTEProjectManagement",
    backgroundImage: `https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    info: `Efficiently managing projects by ensuring thorough planning and securing necessary permits, maintaining schedules and budgets for on-time and cost-effective completion, and delivering high-quality systems with flawless commissioning before handover.
`,
    services: [
      "Planning and Permits: Plan thoroughly and secure all required permits before starting.",
      "Budget and Time: Stay on schedule and control costs to ensure timely, on-budget completion.",
      "EV Charger Maintenance: Comprehensive maintenance services, including diagnostics and repairs, to ensure reliable and efficient operation.",
      "Quality and Commissioning: Maintain high quality standards and ensure systems work perfectly before delivery.",
      "Expert advice on designing and implementing electric vehicle charging networks. Tailored solutions for businesses and municipalities to meet growing EV demands. Incentive Program Guidance",
      "Assistance in navigating grants, subsidies, and tax incentives for EV projects. Maximize funding opportunities to reduce upfront costs. Best Practices for ROI",
      "Strategies to optimize EV infrastructure investments for long-term profitability. Emphasis on efficiency, scalability, and user satisfaction."
    ],
    photoGallery: [
      'https://images.pexels.com/photos/7869034/pexels-photo-7869034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8853472/pexels-photo-8853472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3614762/pexels-photo-3614762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3862620/pexels-photo-3862620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3862154/pexels-photo-3862154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4705093/pexels-photo-4705093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5667685/pexels-photo-5667685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  CCTVinstallations: {
    id: 3,
    title: "CCTV camera  installation",
    backgroundImage: `${cctv}`,
    routeName: "CCTVinstallations",
    info: ` Our CCTV camera installation service offers enhanced security for homes and businesses. We provide expert consultation, strategically positioning high-quality cameras to cover critical areas. Our professionals ensure seamless installation, integrating cutting-edge technology for real-time monitoring. With a focus on deterring potential threats and safeguarding assets, our CCTV solutions offer peace of mind and proactive security management.`,
    services: [
      "CCTV camera installation",
      "sales of CCTV cameras",
      "CCTV camera maintenance",
      "CCTV camera installaion trainings",
    ],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      cctvAd,
      cctvTraining,
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      "https://i.ibb.co/RjBLWxB/grey-brim.png",
    ],
  },
  generalhousewiring: {
    id: 4,
    title: "general house wiring",
    backgroundImage: `${electrical}`,
    routeName: "generalhousewiring",
    info: ` Our comprehensive house wiring service covers both surface and conduit installations, tailored to your preferences. For a clean and modern look, our surface wiring solutions ensure seamless integration of electrical systems without invasive modifications. Alternatively, our conduit wiring offers enhanced protection, concealing wires within durable conduits for safety and aesthetics. With our expertise, your home will boast efficient, safe, and visually appealing electrical installations that meet your unique needs.`,
    services: [
      "general house wiring",
      "electrical maintenance",
      "electrical wiring trainings",
    ],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    ],
  },
  partnershipDevelopment: {
    id: 5,
    title: "Partnership Development for CCT Electric",
    backgroundImage: `https://images.pexels.com/photos/3184316/pexels-photo-3184316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    routeName: "partnershipDevelopment",
    info: ` Collaborating with us means joining forces for mutual growth. We value partnerships that harness our expertise and resources to achieve shared goals. Whether you're a business seeking innovative solutions or an organization aiming to make a difference, our partnership approach emphasizes open communication, resource synergy, and collective success. Together, we unlock opportunities, drive innovation, and create lasting positive impacts.`,
    services: [
      "Local Governments: Develop policies and plans to promote sustainable transportation. Streamline EV infrastructure deployment through regulatory support.",
      "Utility Companies: Partner on grid optimization and charging station integration. Ensure efficient energy distribution for EV networks. Businesses",
      "Provide tailored EV solutions to enhance sustainability efforts.",
      "Foster innovation in workplace and commercial charging options.",
      "Educational Institutions: Promote EV awareness and training for future workforce readiness. Collaborate on research and development in EV technologies.",
      "Together, we create impactful partnerships that accelerate EV adoption and build a sustainable future."
    ],
    photoGallery: [
      "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
  },
};
