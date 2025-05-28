import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  recording01,
  recording03,
  r211,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  js,
  sliders04,
  telegram,
  twitter,
  security,
  data,
  features1,
  react1,
  tailwind,
guide,
  vasanthRaj,
  karthi,
  vijay,
  arjun,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Contributors",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "5",
    title: "Welcome",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [data, security, features1];

export const brainwaveServices = [
  "Seamless Features",
  "Smart Monitoring",
  "Top-natch secuirty",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Battery State recognition",
    text: "Deploy advanced algorithms for precise SOC/SOH estimation, delivering reliable battery status updates through intuitive visualizations..",
    date: "Jan 2025",
    status: "done",
    imageUrl: r211,
    colorful: true,
  },
  {
    id: "1",
    title: "Visualization",
    text: "Unlock achievement tiers by tracking your battery's performance through dynamic Recharts visualizations of voltage/temperature patterns",
    date: "Feb 2025",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Emphasizes AI + system intelligence",
    text: "Customize your BMS assistant’s interface and alerts—personalize dashboards, set priority parameters, and tailor notifications for voltage/temperature thresholds to match your monitoring style.",
    date: "March 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "March 2025",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch Monitorin,it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Features",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Monitoring",
  },
  {
    id: "2",
    title: "Top-notch Automation",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "React",
    icon: react1,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "JavaScript",
    icon: js,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "tailwind",
    icon: tailwind,
    width: 38,
    height: 32,
  },
];

export const contributors = [
  {
    id: "0",
    name: "Rengarajan V",
    role: "Beloved Guide",
    bio: "Built the core prediction algorithms and system architecture",
    image: guide, 
  },
  {
    id: "1",
    name: "Karthikeyan R",
    role: "Software Developer",
    bio: "Built the core prediction algorithms and system architecture",
    image: karthi, 
  },
  {
    id: "2",
    name: "VasanthRaj M.S",
    role: "Hardware Integrator",
    bio: "Engineered hardware systems integrating sensors, controllers, and power components for precise battery monitoring",
    image:vasanthRaj,
  },
  {
    id: "3",
    name: "Vijay V",
    role: "BMS Hardware Architect",
    bio: "Developed battery monitoring hardware from schematics to prototypes",
    image: vijay,
  },
  {
    id: "4",
    name: "Arjun G ",
    role: "Hardware Integrator",
    bio: "Created the intuitive dashboard and visualization tools",
    image: arjun,
  }
];
export const benefits = [
  {
    id: "0",
    title: "Monitor Everything",
    text: "Get instant access to all critical battery parameters - voltage, temperature, state of charge - in one centralized dashboard with real-time updates.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Predictive Insights",
    text: "Our AI models analyze historical patterns to predict future battery performance and potential failures before they occur.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Visualize Performance",
    text: "Interactive charts display battery degradation trends, charge cycles, and efficiency metrics at a glance.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Smart Notifications",
    text: "Receive proactive alerts about critical battery conditions like overvoltage, overheating, or capacity fade.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Deep Battery Analytics",
    text: "Access advanced metrics including internal resistance, cycle count analysis, and state-of-health projections.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
