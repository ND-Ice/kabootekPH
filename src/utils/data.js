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
