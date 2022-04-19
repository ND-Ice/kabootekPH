import {
  FaHome,
  FaTasks,
  FaInfoCircle,
  FaAddressBook,
  FaShoePrints,
  FaPalette,
} from "react-icons/fa";

// image import
import service_1 from "../images/service-1.png";
import service_2 from "../images/service-2.png";
import service_3 from "../images/service-3.png";
import service_4 from "../images/service-4.png";
import service_5 from "../images/service-5.png";
import service_6 from "../images/service-6.png";
import service_7 from "../images/service-7.png";
import service_8 from "../images/service-8.png";
import service_9 from "../images/service-9.png";
import service_10 from "../images/service-10.png";
import service_11 from "../images/service-11.png";
import service_12 from "../images/service-12.png";
import service_13 from "../images/service-13.png";
import service_14 from "../images/service-14.png";
import service_15 from "../images/service-15.png";
import service_16 from "../images/service-16.png";

// hero image import
import hero_1 from "../images/hero-1.png";
import hero_2 from "../images/hero-2.png";
import hero_3 from "../images/hero-3.png";
import hero_4 from "../images/hero-4.png";
import hero_5 from "../images/hero-5.png";
import hero_6 from "../images/hero-6.png";
import hero_7 from "../images/hero-7.png";
import hero_8 from "../images/hero-8.png";
import hero_9 from "../images/hero-9.png";
import hero_10 from "../images/hero-10.png";
import hero_11 from "../images/hero_image.png";

export const services = [
  {
    image: service_1,
    title: "IT Consulting",
    description:
      "Helps businesses create value and optimize their performance through technology.",
  },
  {
    image: service_2,
    title: "Web Development",
    description:
      "building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming.",
  },
  {
    image: service_3,
    title: "Application Development",
    description:
      "Process of creating a computer program or a set of programs to perform the different tasks that a business requires.",
  },
  {
    image: service_4,
    title: "Custom Software Development",
    description:
      "Process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations.",
  },
];

export const navItems = [
  { title: "Home", dest: "home" },
  { title: "Services", dest: "services" },
  { title: "About", dest: "about" },
  { title: "Contact", dest: "contact" },
];

export const sidebarLinks = [
  { title: "Home", icon: FaHome, to: "/dashboard" },
  { title: "Services", icon: FaTasks, to: "/dashboard/services" },
  { title: "About", icon: FaInfoCircle, to: "/dashboard/about" },
  { title: "Contact", icon: FaAddressBook, to: "/dashboard/contact" },
  { title: "Footer", icon: FaShoePrints, to: "/dashboard/footer" },
  { title: "Theme", icon: FaPalette, to: "/dashboard/theme" },
];

export const servicesImageSelection = [
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
  service_6,
  service_7,
  service_8,
  service_9,
  service_10,
  service_11,
  service_12,
  service_13,
  service_14,
  service_15,
  service_16,
];

export const heroImages = [
  hero_1,
  hero_2,
  hero_3,
  hero_4,
  hero_5,
  hero_6,
  hero_7,
  hero_8,
  hero_9,
  hero_10,
  hero_11,
];
