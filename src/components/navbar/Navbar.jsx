import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio 
        </motion.span>
        <div className="social">
     
          <a href="https://www.facebook.com/manaf.saoub">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/manaf-saoub/">
            <img src="/linkedin.png"  alt="" />
          </a>
          <a href="https://github.com/manaf12">
            <img src="/github.png"  alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;