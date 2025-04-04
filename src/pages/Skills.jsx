import React, { useState, useEffect } from "react";

//components
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import AnimatedLetters from "../components/AnimatedLetters";
import Progress from "../components/Progress";
import Footer from "../components/Footer";

//logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGithubAlt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Navbar />
          <section className="hero bg-slate-200 h-[100%] xl:pt-10 overflow-hidden dark:bg-darkDarkBlue">
            <div className="skills-page flex flex-col px-0 mx-auto md:flex-row xl:flex-row xl:px-[15rem] justify-around items-center h-full">
              <div className="text-zone my-10">
                <span className="font-tags text-accent m-0 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;div className="skills"&gt;
                </span>
                <span className="flex">
                  <h1 className="h1 relative dark:text-white">
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={["M", "y", " "]}
                      idx={15}
                    />
                  </h1>
                  <h1 className="h1 relative text-accent dark:text-darkLightBlue">
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={["S", "k", "i", "l", "l", "s"]}
                      idx={15}
                    />
                  </h1>
                </span>
                <span className="font-tags mt-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;p&gt;
                </span>
                <p className="para mb-5 dark:text-slate-200">
                  I have excellent skills in developing websites. I am
                  proficient in various frameworks related to frontend
                  development, such as HTML/CSS, JavaScript, ReactJS, Bootstrap,
                  and TailwindCSS. Additionally, I have extensive knowledge of
                  the libraries within ReactJS.
                </p>
                <p className="para mb-5 dark:text-slate-200">
                  I also have knowledge of SQL queries and Postman, as well as
                  AGILE and SCRUM methodologies. In addition to my university
                  education, I acquired this knowledge from a bootcamp at Binar
                  Academy.
                </p>
                <p className="para dark:text-slate-200">
                  I have a strong interest in website development, particularly
                  in frontend development. I also enjoy learning new things and
                  embracing new challenges.
                </p>
                <span className="font-tags mt-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/p&gt;
                </span>
                <span className="font-tags text-accent -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/div&gt;
                </span>
              </div>

              <div className="stage-cube-cont">
                <div className="cubespinner animate-spincube origin-custom">
                  <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                  </div>
                  <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#264de4" />
                  </div>
                  <div className="face3">
                    <FontAwesomeIcon icon={faJs} color="#EFD817" />
                  </div>
                  <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#7cc5d9" />
                  </div>
                  <div className="face5">
                    <FontAwesomeIcon icon={faGithubAlt} color="#171515" />
                  </div>
                  <div className="face6">
                    <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hero bg-slate-200 xl:pt-5 overflow-hidden dark:bg-darkDarkBlue">
            <div className="container mx-auto">
              <Progress />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Skills;
