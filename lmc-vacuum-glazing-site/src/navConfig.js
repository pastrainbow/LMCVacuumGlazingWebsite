import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Applications from "./pages/Applications.jsx"
import { allProducts } from "./productsConfig.js";
import { allApplications } from "./applicationsConfig.js";
import { composePrefix } from "yet-another-react-lightbox";

export const navLinks = [
  { path: "/", label: "Home", component: Home, end: true},

  {
    path: "/products",
    label: "Products",
    component: Products,
    children: allProducts,
  },

  {
    path: "/application", 
    label: "Applications", 
    component: Applications,
    children: allApplications,
  },

  { path: "/#Projects", label: "Projects"},

  { path: "/about", label: "About", component: About },

  { path: "/#Contact", label: "Contact"},
];
