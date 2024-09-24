import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Anshul Tiwari
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/tiwari-anshul12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/anshultiwari95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
