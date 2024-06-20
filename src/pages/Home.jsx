import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { RiSparkling2Line } from "@remixicon/react";
import frontEndFrameworks from "../assets/animations/frameworks.json";

// images
import Me from "../assets/images/garin-square.png";
import G15 from "../assets/images/tools/dell-g15-setup-cropped.png";
import VSC from "../assets/images/tools/vscode-thumbnail.jpeg";

// components
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import AnimatedLetters from "../components/AnimatedLetters";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Navbar />
          {/* Hero Section */}
          <section className="hero bg-slate-200 xl:h-full py-5 xl:pt-12 xl:pb-0 overflow-hidden dark:bg-darkDarkBlue">
            <div className="container mx-auto">
              {/* Text & Img */}
              <div className="flex flex-col xl:flex-row justify-between">
                {/* Text */}
                <div className="hero__text xl:w-[48%]">
                  {/* Badge */}
                  <div className="flex items-center bg-white py-[10px] px-[20px] xl:max-w-max xl:w-max gap-x-2 mb-[46px] rounded-full mx-auto xl:mb-[36px] animate-[fadeInUp_2s] xl:mx-0 dark:bg-primary">
                    {/* Badge Icon */}
                    <RiSparkling2Line className="text-2xl text-accent dark:text-darkLightBlue" />
                    <div className="uppercase text-base font-semibold tracking-[2.24px] text-[0.8rem] xl:text-[1rem] dark:text-slate-200">
                      Hello👋, Welcome to My Portfolio Website
                    </div>
                  </div>

                  <div className="px-3 xl:p-0 flex flex-col gap-y-2 animate-[backInLeft_1s]">
                    <span className="font-tags text-accent m-0 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                      &lt;div className="hero"&gt;
                    </span>

                    {/* Title */}
                    <span className="font-tags text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                      &lt;h1&gt;
                    </span>

                    <span>
                      <h1 className="h1 mb-1 xl:text-left dark:text-white">
                        <AnimatedLetters
                          letterClass={letterClass}
                          strArray={[
                            "I",
                            "'",
                            "m",
                            " ",
                            "G",
                            "a",
                            "r",
                            "i",
                            "n",
                            " ",
                            "C",
                            "a",
                            "e",
                            "s",
                            "a",
                            "r",
                          ]}
                          idx={15}
                        />
                      </h1>
                      <h2 className="h2 mb-1 xl:text-left text-accent dark:text-darkLightBlue">
                        <AnimatedLetters
                          letterClass={letterClass}
                          strArray={[
                            "F",
                            "r",
                            "o",
                            "n",
                            "t",
                            "e",
                            "n",
                            "d",
                            " ",
                            "D",
                            "e",
                            "v",
                            "e",
                            "l",
                            "o",
                            "p",
                            "e",
                            "r",
                          ]}
                          idx={15}
                        />
                      </h2>
                    </span>

                    <span className="font-tags text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                      &lt;/h1&gt;
                    </span>

                    {/* Desc */}

                    <p className="para mb-5 md:max-w-xl xl:text-left dark:text-slate-200">
                      I'm a front-end web developer who loves creating dynamic
                      and engaging user interfaces. I enjoy learning new
                      technologies and tackling challenges. My passion for
                      innovation drives me to deliver top-notch web experiences.
                    </p>
                    <Link
                      className="para ml-4 xl:ml-0 animate-[backInLeft_1s] xl:text-[1.5rem]"
                      to={"/contact"}
                      onClick={scrollToTop}
                    >
                      <Button
                        className="animate-[backInLeft_1s]"
                        value="📩 Message Me !"
                      />
                    </Link>
                    <span className="font-tags mt-7 hidden text-accent mb-3 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                      &lt;/div&gt;
                    </span>
                  </div>

                  {/* Btn */}
                </div>

                <span className="font-tags mt-7 text-accent mb-3 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:hidden">
                  &lt;/div&gt;
                </span>

                {/* Image */}
                <div className="relative h-full top-0 -right-16">
                  <div className="absolute left-2 -right-2 -bottom-0 hero__img hidden animate-[backInRight_1s] md:hidden lg:hidden xl:flex xl:max-w-[914px]">
                    <img src={Me} alt="" />
                  </div>
                  <span className="hidden top-5 -right-10 xl:flex">
                    <svg
                      className="fill-accent"
                      width={650}
                      height={650}
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M69.8,-22.9C78.9,5.2,66.6,40.1,42,58C17.4,76,-19.7,77,-44.5,59.4C-69.4,41.8,-82,5.5,-72.6,-23.2C-63.1,-51.9,-31.6,-73,-0.6,-72.8C30.4,-72.6,60.7,-51.1,69.8,-22.9Z"
                        transform="translate(100 100) scale(1.1)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Here's what I used to create this */}
          <section className="info bg-slate-100 xl:h-full py-10 xl:pt-10 xl:pb-0 overflow-hidden dark:bg-primary">
            {/* title */}

            <div className="container mx-auto px-3 xl:p-0">
              <span className="font-tags text-grey m-0 -ml-[0.rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                &lt;h1&gt;
              </span>

              <h2 className="mx-auto container xl:container xl:mx-auto xl:flex flex-row h2 mb-1 dark:text-white">
                Here's what I used to create this
              </h2>
              <h2 className="mx-auto container xl:container xl:mx-auto xl:flex flex-row h2 mb-1 text-accent dark:text-darkLightBlue">
                Portfolio Website
              </h2>

              <span className="font-tags text-grey m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                &lt;/h1&gt;
              </span>
            </div>

            {/* hardware */}

            <span className="flex flex-col mx-auto mb-0 gap-y-10 xl:gap-y-7 xl:mb-10">
              <span className="flex justify-center md:flex md:justify-center lg:flex lg:justify-center xl:hidden">
                <Lottie
                  className="w-[20rem] -top-[2rem]"
                  animationData={frontEndFrameworks}
                />
              </span>
              <div className="flex flex-row-reverse">
                <div className="px-10 xl:px-28">
                  <a
                    href="https://www.dell.com/en-id/shop/cty/pdp/spd/g-series-15-5515-laptop"
                    className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row xl:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-darkDarkBlue dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={G15}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                        DELL G15 5515 (Laptop)
                      </h5>
                      <p className="para mb-3 dark:text-slate-200">
                        Specification:
                      </p>
                      <ul className="list-disc">
                        <li className="ms-6 text-sm dark:text-slate-200">
                          <b>Processor</b> : AMD® Ryzen™ 7 5800H (16 MB Cache,
                          8 Core, 3.20 GHz to 4.40 GHz) with AMD® Radeon™
                          Graphics
                        </li>
                        <li className="ms-6 text-sm dark:text-slate-200">
                          <b>Operating System</b> : Windows 10 Home, 64-bit
                        </li>
                        <li className="ms-6 text-sm dark:text-slate-200">
                          <b>Video Card</b> : Nvidia® GeForce® RTX™ 3050 TI,
                          4 GB, GDDR6
                        </li>
                        <li className="ms-6 text-sm dark:text-slate-200">
                          <b>Memory</b> : 16 GB, 2 x 8 GB, Dual-Channel DDR4,
                          3200 MHz
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <Lottie
                  className="w-[25rem] -mt-[3.5rem] mb-[-3rem] hidden xl:block"
                  animationData={frontEndFrameworks}
                />
              </div>

              <div className="flex flex-row">
                <div className="px-10 xl:px-28">
                  <a
                    href="https://code.visualstudio.com/"
                    className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row xl:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-darkDarkBlue dark:hover:bg-gray-700"
                  >
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                        Visual Studio Code (IDE)
                      </h5>
                      <p className="mb-3 text-sm dark:text-slate-200">
                        Visual Studio Code or VSCode, is a free, open-source IDE
                        that has gained a lot of popularity in recent years.
                        It's highly customizable, with a wide range of
                        extensions available for various languages and
                        frameworks. VSCode also has a built-in debugging feature
                        and Git integration.
                      </p>
                    </div>
                    <img
                      className="object-cover w-full h-96 rounded-b-lg md:h-auto md:w-48 md:rounded-none xl:rounded-r-lg"
                      src={VSC}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </span>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
