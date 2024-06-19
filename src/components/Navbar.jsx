import { Link } from "react-router-dom";
import { useState } from "react";
import {
  RiMapPinFill,
  RiWhatsappFill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiSearchLine,
} from "@remixicon/react";
import DarkMode from "./DarkMode";
// import "../assets/css/Translator.css";

import Logo from "../assets/images/logo-g-cropped.png";
import Me from "../assets/images/garin-square.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navOpenedClass = "left-0";
  const navClosedClass = "left-[-300px]";
  const arrowLeftClass = "ri-arrow-left-s-line";
  const arrowRightClass = "ri-arrow-right-s-line";

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeBtnIconClass = isNavOpen ? arrowLeftClass : arrowRightClass;
  const mobileNavClass = isNavOpen ? navOpenedClass : navClosedClass;

  return (
    <header className="py-5 lg:pt-6 lg:pb-14 dark:bg-black">
      <div
        className="container mx-auto lg:relative flex flex-col lg:flex-row 
      lg:justify-between gap-y-4 lg:gap-y-0"
      >
        {/* Logo */}
        <div className="flex justify-center lg:justify-normal">
          <Link to={"/"}>
            <img className="w-14" src={Logo} alt="" />
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          {/* Location */}

          <Link
            className="flex justify-center items-center gap-x-2 lg:justify-normal"
            to={"/contact"}
          >
            <RiMapPinFill className="text-2xl text-accent" />
            <div className="dark:text-white">Depok, Jawa Barat</div>
          </Link>

          {/* Whatsapp */}
          <Link
            to={
              "https://wa.me/6285155232629?text=Halo%20saya%20tertarik%20dengan%20Portofolio%20anda!"
            }
            className="flex justify-center items-center gap-x-2 lg:justify-normal"
          >
            <RiWhatsappFill className="text-2xl text-accent" />
            <div className="dark:text-white">Whatsapp me</div>
          </Link>

          {/* Dark Mode */}
          <div className="flex flex-col items-center justify-center gap-0">
            <DarkMode />
          </div>

          {/* Mobile NavBar */}
          <nav
            className={`mnav bg-white fixed w-[300px] top-0 h-screen ${mobileNavClass} 
          -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20 dark:bg-primary`}
          >
            {/* NavBar Trigger Button */}
            <div
              className="mnav__close-btn bg-primary w-8 h-8 relative -right-full 
            top-8 flex justify-center items-center rounded-tr-lg cursor-pointer 
            transition-all"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <RiArrowLeftSLine
                  className={`ri-arrow-left-s-line mnav__close-btn-icon text-2xl 
                text-white ${closeBtnIconClass}`}
                />
              ) : (
                <RiArrowRightSLine
                  className={`ri-arrow-right-s-line mnav__close-btn-icon text-2xl 
                text-white ${closeBtnIconClass}`}
                />
              )}
            </div>

            {/* Logo, List, Form */}
            <div className="px-12 flex flex-col gap-y-12 h-full">
              {/* Logo */}
              <Link to={"/"}>
                <img
                  className="w-28 rounded-full bg-slate-200"
                  src={Me}
                  alt=""
                />
              </Link>

              {/* List */}
              <ul className="flex flex-col gap-y-5">
                <li>
                  <Link
                    to={"/"}
                    className="text-sm text-secondary hover:text-accent 
                  transition-all duration-300 mb-0 dark:text-slate-200 dark:hover:text-darkLightBlue"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-sm text-secondary hover:text-accent 
                  transition-all duration-300 mb-0 dark:text-slate-200 dark:hover:text-darkLightBlue"
                  >
                    About & Curriculum Vitae
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/skills"}
                    className="text-sm text-secondary hover:text-accent 
                  transition-all duration-300 mb-0 dark:text-slate-200 dark:hover:text-darkLightBlue"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-sm text-secondary hover:text-accent 
                  transition-all duration-300 mb-0 dark:text-slate-200 dark:hover:text-darkLightBlue"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Form */}
              <form className="relative flex gap-x-[10px]">
                <label htmlFor="mnav-search-input">
                  <RiSearchLine className="text-2-xl text-accent " />
                </label>
                <input
                  type="text"
                  id="mnav-search-input"
                  placeholder="Search..."
                  className="outline-none w-[160px] border-b-2 focus:border-b-2 
                focus:border-accent placeholder:italic dark:bg-primary"
                />
              </form>
            </div>
          </nav>

          {/* Desktop NavBar */}
          <nav
            className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16
          rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px] dark:bg-primary"
          >
            {/* List */}
            <ul className="flex gap-x-4">
              <li>
                <Link
                  to="/"
                  className="border-r pr-4 hover:text-accent
                transition-all duration-300 mb-0 dark:text-slate-200 dark:border-secondary dark:hover:text-[#b3d4fc]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="border-r pr-4 hover:text-accent 
                transition-all duration-300 mb-0 dark:text-slate-200 dark:border-secondary dark:hover:text-[#b3d4fc]"
                >
                  About & Curriculum Vitae
                </Link>
              </li>
              <li>
                <Link
                  to={"/skills"}
                  className="border-r pr-4 hover:text-accent 
                transition-all duration-300 mb-0 dark:text-slate-200 dark:border-secondary dark:hover:text-[#b3d4fc]"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="hover:text-accent 
                transition-all duration-300 mb-0 dark:text-slate-200 dark:hover:text-[#b3d4fc]"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Form */}
            <form className="relative flex gap-x-[10px]">
              <label
                htmlFor="search-input"
                className="flex justify-center text-center group"
              >
                <RiSearchLine className="text-2-xl text-accent" />
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Search..."
                className="outline-none w-[100px] focus:w-[180px]
              focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150 dark:bg-primary"
              />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
