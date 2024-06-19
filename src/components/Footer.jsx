import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo-g-cropped.png";
import LinkedIn from "../assets/images/socmed/linkedin.png";
import Github from "../assets/images/socmed/github.png";
import Instagram from "../assets/images/socmed/instagram.png";
import Facebook from "../assets/images/socmed/facebook.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white shadow dark:bg-black">
      <div className="container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            onClick={scrollToTop}
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="flex flex-row">
              <img src={Logo} className="h-10" alt="Flowbite Logo" />
              <span className="ml-3 mt-[0.5rem] text-2xl font-semibold font-primary whitespace-nowrap dark:text-white">
                Garin Caesar
              </span>
            </div>
          </Link>
          <div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to={"/"}
                  onClick={scrollToTop}
                  className="hover:underline me-4 md:me-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  onClick={scrollToTop}
                  className="hover:underline me-4 md:me-6"
                >
                  About & Curriculum Vitae
                </Link>
              </li>
              <li>
                <Link
                  to={"/skills"}
                  onClick={scrollToTop}
                  className="hover:underline me-4 md:me-6"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  onClick={scrollToTop}
                  className="hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-x-6 items-center mt-6 mb-6 text-sm font-medium text-gray-500 md:flex-row-reverse xl:flex-row-reverse sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to={"https://www.instagram.com/garincsr/"}
                  className="hover:underline me-4 md:me-6"
                >
                  <img className="w-9" src={Instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/garin.caesarsyanugiri"}
                  className="hover:underline me-4 md:me-6"
                >
                  <img className="w-9" src={Facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://github.com/garincsr"}
                  className="hover:underline me-4 md:me-6"
                >
                  <img className="w-9" src={Github} alt="github" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/garincaesar/"}
                  className="hover:underline me-4 md:me-6"
                >
                  <img className="w-9" src={LinkedIn} alt="linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Garin Caesar Syanugiri™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
