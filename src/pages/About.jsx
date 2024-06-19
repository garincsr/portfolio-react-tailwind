import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

//components
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import AnimatedLetters from "../components/AnimatedLetters";
import Button from "../components/Button";
import Footer from "../components/Footer";

import Work from "../assets/animations/workAnimation.json";
import { RiArrowRightUpLine } from "@remixicon/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");

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
            <div className="container mx-auto flex flex-col gap-y-10 xl:flex-row">
              <div className="about-text-zone animate-[backInLeft_1s]">
                <span className="font-tags text-accent m-0 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;div className="about me"&gt;
                </span>
                <span className="flex">
                  <h3 className="h3 me-2 dark:text-white">A little bit</h3>
                  <h3 className="h3 text-accent dark:text-darkLightBlue">
                    about me
                  </h3>
                </span>
                <h1 className="h1 xl:w-[42rem] dark:text-white">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={[
                      "I",
                      " ",
                      "H",
                      "a",
                      "v",
                      "e",
                      " ",
                      "a",
                      " ",
                      "S",
                      "t",
                      "r",
                      "o",
                      "n",
                      "g",
                      " ",
                      "I",
                      "n",
                      "t",
                      "e",
                      "r",
                      "e",
                      "s",
                      "t",
                      " ",
                      "i",
                      "n",
                      " ",
                      "W",
                      "e",
                      "b",
                      " ",
                      "D",
                      "e",
                      "v",
                      "e",
                      "l",
                      "o",
                      "p",
                      "m",
                      "e",
                      "n",
                      "t",
                    ]}
                    idx={15}
                  />
                </h1>
                <span className="font-tags mt-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;p&gt;
                </span>
                <p className="para py-0 mb-5 dark:text-slate-200">
                  I possess good web development skills, particularly in
                  Front-end Development, and I also have good communication
                  skills and thrive in a team environment. I have a keen
                  interest in Web Development, Front-end Development, IT
                  Support, and Quality Assurance.
                </p>
                <Link to="https://drive.google.com/drive/folders/1mForWkL6z90AJ1aWrpPhrgwdSoD0hTAo?usp=sharing">
                  <Button value="⬇️ Download My CV" />
                </Link>

                <span className="font-tags mt-3 hidden text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/p&gt;
                </span>
                <span className="font-tags hidden text-accent -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/div&gt;
                </span>
              </div>
              <span className="font-tags mt-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:hidden">
                &lt;/p&gt;
              </span>
              <span className="font-tags text-accent -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:hidden">
                &lt;/div&gt;
              </span>

              <div className="relative mx-auto xl:top-[5rem] xl:w-[110rem] xl:-right-10 animate-[backInRight_1s]">
                <Lottie animationData={Work} />
              </div>
            </div>
          </section>

          <section className="hero bg-slate-200 h-[100%] xl:pt-10 overflow-hidden dark:bg-darkDarkBlue">
            <h1 className="h1 container mt-10 mx-auto mb-5 underline underline-offset-8 dark:text-white">
              Personal Details
            </h1>
            <div className="relative container mx-auto flex flex-col xl:flex-row">
              <div className="relative">
                <div className="flex flex-col md:flex-row xl:flex-row gap-x-10">
                  <span className="flex flex-col w-[15rem] gap-y-5">
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h5 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Name
                        </h5>
                        <h4 className="h4 dark:text-slate-200">
                          Garin Caesar Syanugiri
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h5 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Birth
                        </h5>
                        <h4 className="h4 dark:text-slate-200">
                          Jakarta, 22 March 2000
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h5 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Religion
                        </h5>
                        <h4 className="h4 dark:text-slate-200">Moeslem</h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h5 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Marital Status
                        </h5>
                        <h4 className="h4 dark:text-slate-200">Unmarried</h4>
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-col w-[18rem] mt-10 xl:mt-0 gap-y-5">
                    <span className="flex flex-row py-2 gap-x-2">
                      <span>
                        <Link to="https://wa.me/6285155232629?text=Halo%20saya%20tertarik%20dengan%20Portofolio%20anda!">
                          <RiArrowRightUpLine className="bg-accent text-slate-200 hover:bg-slate-400 dark:bg-darkLightBlue dark:hover:bg-slate-400 hover:shadow-md rounded-full dark:text-primary" />
                        </Link>
                      </span>
                      <span className="flex flex-col">
                        <h5 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Phone
                        </h5>
                        <h4 className="text-[1.25rem] font-semibold xl:font-semibold xl:text-[1.5rem] dark:text-slate-200">
                          +62-851-5523-2629
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span>
                        <Link to="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=garincaesar69@gmail.com">
                          <RiArrowRightUpLine className="bg-accent text-slate-200 hover:bg-slate-400 dark:bg-darkLightBlue dark:hover:bg-slate-400 hover:shadow-md rounded-full dark:text-primary" />
                        </Link>
                      </span>
                      <span>
                        <h4 className="text-[0.8rem] text-accent dark:text-darkLightBlue">
                          Email
                        </h4>
                        <h5 className="text-[1.25rem] font-semibold xl:font-semibold xl:text-[1.5rem] dark:text-slate-200">
                          garincaesar69@gmail.com
                        </h5>
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="relative mx-auto mt-10 xl:-top-[3rem]">
                <span className="flex flex-col w-[100%] gap-y-5 mb-10 xl:flex-row xl:justify-center xl:w-[60rem] dark:text-slate-200">
                  <span className="para border-2 p-10 rounded-lg shadow-cube1 border-accent xl:w-[50%] dark:border-darkLightBlue">
                    <p className="underline">Frontend Web Dev</p>
                    <span className="flex flex-wrap gap-x-2">
                      <span className="li-check"> HTML/CSS</span>
                      <span className="li-check"> JavaScript</span>
                      <span className="li-check"> React JS</span>
                      <span className="li-check"> Bootstrap</span>
                      <span className="li-check"> Tailwind CSS</span>
                    </span>
                    <p className="underline mt-4 ">Fullstack Web Dev</p>
                    <span className="flex flex-wrap gap-x-2">
                      <span className="li-check"> PHP</span>
                      <span className="li-check"> Express JS</span>
                    </span>
                    <p className="underline mt-4 ">Else</p>
                    <span className="flex flex-wrap gap-x-2">
                      <span className="li-check"> SQL Query</span>
                      <span className="li-check"> MySQL</span>
                      <span className="li-check"> PostgreSQL</span>
                      <span className="li-check"> AGILE Methodology</span>
                      <span className="li-check"> SCRUM Methodology</span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section className="hero bg-slate-200 h-[100%] xl:pt-10 overflow-hidden dark:bg-darkDarkBlue">
            <div className="container mx-auto flex flex-row mt-10 xl:gap-x-20">
              <div>
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="absolute left-[10rem] mx-auto text-accent opacity-10 xl:left-0 xl:opacity-80 xl:relative text-[20rem]"
                />
              </div>
              <div className="relative">
                <h1 className="h1 underline underline-offset-8 mb-5 dark:text-white">
                  Education
                </h1>
                <div className="flex flex-col xl:flex-row gap-y-5 gap-x-20">
                  <span className="flex flex-col gap-y-5 xl:w-[35rem]">
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="text-[0.8rem] dark:text-slate-200">
                          2018 - 2023
                        </h4>
                        <h4 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          Gunadarma University
                        </h4>
                        <h4 className="font-medium text-[1.2rem] dark:text-slate-200">
                          Bachelor Degree
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="text-[0.8rem] dark:text-slate-200">
                          2015 - 2018
                        </h4>
                        <h4 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          SMA Yaspen Tugu Ibu I
                        </h4>
                        <h4 className="font-medium text-[1.2rem] dark:text-slate-200">
                          Senior High School (IPA)
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="text-[0.8rem] dark:text-slate-200">
                          2012 - 2015
                        </h4>
                        <h4 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          SMPN 4 Depok
                        </h4>
                        <h4 className="font-medium text-[1.2rem] dark:text-slate-200">
                          Junior High School
                        </h4>
                      </span>
                    </span>
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="text-[0.8rem] dark:text-slate-200">
                          2006 - 2012
                        </h4>
                        <h4 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          SD Yaspen Tugu Ibu I
                        </h4>
                        <h4 className="font-medium text-[1.2rem] dark:text-slate-200">
                          Elementary School
                        </h4>
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-col gap-y-5">
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="flex text-[0.8rem] dark:text-slate-200">
                          Feb 11<p className="align-super text-[0.5rem]">st</p>{" "}
                          - Jul 8<p className="align-super text-[0.5rem]">th</p>
                          , 2022
                        </h4>
                        <h5 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          Independent Study Program from Binar Academy
                        </h5>
                        <h5 className="font-medium text-[1.2rem] dark:text-slate-200">
                          Full Stack Web Development
                        </h5>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="hero bg-slate-200 h-[100%] xl:pt-10 overflow-hidden dark:bg-darkDarkBlue">
            <div className="container mt-10 mb-10 mx-auto flex flex-row xl:gap-x-20">
              <div className="relative">
                <h1 className="h1 mb-5 underline underline-offset-8 dark:text-white">
                  Work Experience
                </h1>
                <div className="flex flex-col xl:flex-row gap-y-5 gap-x-20">
                  <span className="flex flex-col gap-y-5">
                    <span className="flex flex-row py-2 gap-x-2">
                      <span className="flex flex-col gap-y-3">
                        <h4 className="flex text-[0.8rem] dark:text-slate-200">
                          May 23<p className="align-super text-[0.5rem]">th</p>{" "}
                          - 24<p className="align-super text-[0.5rem]">th</p>,
                          2023
                        </h4>
                        <h5 className="font-semibold text-[1.5rem] text-accent dark:text-darkLightBlue">
                          Part-time Liaison Officer
                        </h5>
                        <h5 className="font-medium text-[1.2rem] dark:text-slate-200">
                          InfraDigital Foundation
                        </h5>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="xl:ml-[25rem]">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="absolute -left-[0.5rem] mx-auto text-accent opacity-10 xl:opacity-80 xl:relative text-[20rem]"
                />
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default About;
