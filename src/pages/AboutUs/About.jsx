import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import me from "../../assets/hh222 (2).jpg"
import { Link } from "react-router-dom";

const About = () => {
  const { user } = useContext(AuthContex)
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={me}
            className="max-w-sm lg:w-1/3 w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h2 className="text-2xl">Hello, My Name Is</h2>
            <h1 className="text-5xl  font-bold">Krishnando Biplob</h1>
            <p className="py-6 lg:w-1/2">
              Lifelong Learner and Full-Stack Web Developer
            </p>
            <p>
              I am a passionate web developer with expertise in React.js, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy building interactive, dynamic, and responsive user interfaces that enhance user experiences. With a strong foundation in modern frontend technologies, I specialize in transforming ideas into functional, scalable web applications.

              I’m always eager to explore new tools and frameworks, keeping my skills sharp and staying updated with industry trends. Whether it’s crafting elegant UI components or optimizing web performance, I thrive on solving challenges with clean, efficient code.

              Let me know if you'd like to adjust or expand it!
            </p>
            <button className="btn mt-4 btn-primary">
              <Link to='https://github.com/Krsnanando-Biplob'>Contact me</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;