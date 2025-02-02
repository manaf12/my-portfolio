import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import Links from "../sidebar/links/Links";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="mobile-menu">
      <Sidebar/>
      </div>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Links/>
        </motion.span>
        <div className="social">
     
          <a href="https://www.facebook.com/manaf.saoub" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/manaf-saoub/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png"  alt="linkedin" />
          </a>
          <a href="https://github.com/manaf12" target="_blank" rel="noopener noreferrer">
            <img src="/github.png"  alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;