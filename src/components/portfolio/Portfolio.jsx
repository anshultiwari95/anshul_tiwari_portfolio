import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: "1",
    title: "Pulze Website",
    img: "pulze.png",
    desc: "A scalable, user-centric platform designed to enhance team collaboration through screen recording, note publishing, and seamless video sharing powered by AWS. The tool allows users to create, edit, annotate, and share videos efficiently, while integrated admin functionalities such as workspace creation, user invitations, and notifications streamline team management. Built using Shadcn's design system with custom higher-order components (HOCs), the platform ensures a visually consistent and reusable UI, delivering an intuitive and cohesive user experience.",
    link: "https://front-end-repo-p11-debugdragons-pulze.vercel.app/home",
    demo: "https://github.com/anshultiwari95/front-end-repo-p11-debugdragons-pulze",
  },
  {
    id: "2",
    title: "AI Mock Interviewer",
    img: "aimock.png",
    desc: "An AI-driven mock interview application that generates real-time interview questions tailored to the candidate's tech stack, experience, and job position using Gemini AI. The platform includes a rating system to evaluate candidate answers, compares them with AI-generated responses, and provides an overall score. It integrates video and microphone recording for realistic interview simulations and features a user-friendly dashboard to track interview history. Drizzle ORM ensures efficient, type-safe database management, while Clerk provides secure user authentication and session management.",
    link: "https://ai-mock-interviewer-three.vercel.app/sign-in",
    demo: "https://github.com/anshultiwari95/AI-Mock-Interviewer",
  },
  {
    id: "3",
    title: "Food Delivery",
    img: "",
    desc: "Developed a comprehensive full-stack food delivery website utilizing a React frontend and a Node.js/Express backend, with responsive design achieved through Tailwind CSS and daisyUI. Implemented robust security features, including authentication via bcrypt, JWT, and OTP, alongside efficient data management using MongoDB and Mongoose. The project includes functionalities for image uploads via Cloudinary and automated email notifications through Nodemailer for account and order updates. Enhanced user experience is facilitated by React Toastify, providing real-time notifications for improved engagement.",
    link: "https://github.com/anshultiwari95/FoodDeliveryWebsite",
    demo: "https://github.com/anshultiwari95/FoodDeliveryWebsite",
  },
  {
    id: "4",
    title: "Personal Portfolio Website",
    img: "port.png",
    desc: "A responsive portfolio website built using React and Framer Motion, featuring dynamic transitions and smooth animations. It includes services, contact, parallax scrolling, and project showcase pages, all aimed at improving user engagement. The site integrates interactive visual elements and is optimized for seamless performance across various devices.",
    link: "https://anshul-tiwari-portfolio.vercel.app/",
    demo: "https://github.com/anshultiwari95/anshul_tiwari_portfolio",
  },
  {
    id: "5",
    title: "Dice Game",
    img: "dice.png",
    desc: "Created an interactive Dice Game using React and Vite, where players select a number and click on a dice image. If the selected number matches the rolled dice, players earn points equivalent to the dice value. Incorrect guesses result in a deduction of two points, adding an element of strategy and excitement. The game features a clean and responsive design with styled-components, ensuring an engaging user experience.",
    link: "https://dice-game-one-indol.vercel.app/",
    demo: "https://github.com/anshultiwari95/DiceGame",
  },
  {
    id: "6",
    title: "Book Store Project",
    img: "book.png",
    desc: "Developed a comprehensive MERN stack application for managing book data, allowing users to create, edit, and delete book information such as title, author, and publication year. The application features a user-friendly interface with both list and card views for displaying books on the homepage. The backend utilizes Express and MongoDB for efficient data handling, while the frontend is built with React and Vite, ensuring a responsive and seamless user experience.",
    link: "https://book-store-project-frontend-ochre.vercel.app/",
    demo: "https://github.com/anshultiwari95/BookStoreProject-Frontend",
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
            <a href={item.link} target="_blank" rel="noreferrer">
              <a href={item.demo} target="_blank" rel="noreferrer">
                <button>See Demo</button>
              </a>
            </a>
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
