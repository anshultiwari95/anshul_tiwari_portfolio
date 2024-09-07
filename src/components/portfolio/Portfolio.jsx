import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: "1",
    title: "Project 1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWfHbDMEaDP28TjD50_JrEqTrMALudiMR5A&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corruptianimi! Ad nam pariatur assumenda quae mollitia libero repellatlicabo maiores?",
  },
  {
    id: "2",
    title: "Project 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWfHbDMEaDP28TjD50_JrEqTrMALudiMR5A&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corruptianimi! Ad nam pariatur assumenda quae mollitia libero repellatlicabo maiores?",
  },
  {
    id: "3",
    title: "Project 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWfHbDMEaDP28TjD50_JrEqTrMALudiMR5A&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corruptianimi! Ad nam pariatur assumenda quae mollitia libero repellatlicabo maiores?",
  },
  {
    id: "4",
    title: "Project 4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWfHbDMEaDP28TjD50_JrEqTrMALudiMR5A&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corruptianimi! Ad nam pariatur assumenda quae mollitia libero repellatlicabo maiores?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;