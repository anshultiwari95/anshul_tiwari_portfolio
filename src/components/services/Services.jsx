import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I’m a Full-Stack Developer
          <br />
          From React to Node.js and Beyond
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              Full-Stack Developer
            </motion.b>{" "}
            Specializing in
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {" "}
              Scalable, Dynamic Web Applications
            </motion.b>
          </h1>
          <a href="/AnshulTiwariResume.pdf" download="AnshulTiwariResume.pdf">
            <button>My Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front End Development</h2>
          <p>
            Proficient in frontend development using modern technologies such as
            React JS, Next JS, and JavaScript, with expertise in React Hooks for
            building dynamic and efficient user interfaces. Skilled in styling
            frameworks like MUI, Tailwind CSS, and CSS, as well as state
            management using Redux to deliver responsive, high-performance
            applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Back End Development</h2>
          <p>
            Experienced in backend development with a focus on Node.js and
            Express.js, specializing in building scalable server-side
            applications. Proficient in designing and implementing RESTful APIs
            to ensure seamless communication between frontend and backend
            systems.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Development</h2>
          <p>
            Experienced in developing dynamic web applications using React JS,
            JavaScript, Next JS, and React Hooks for the frontend. Skilled in
            backend technologies like Node JS, Express JS, and RESTful APIs,
            ensuring seamless communication between frontend and backend.
            Proficient in using CSS, MUI, Tailwind CSS, and Redux to build
            responsive, scalable, and high-performance applications.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
