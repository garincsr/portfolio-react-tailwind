import React from "react";

import Cat from "../assets/images/cat.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div class="h-screen w-screen bg-gray-200 flex items-center dark:bg-darkDarkBlue">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 text-gray-400">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button
            onClick={() => {
              navigate("/");
            }}
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            back to homepage
          </button>
        </div>
        <div class="max-w-lg">
          <img src={Cat} alt="cat" />
        </div>
      </div>
    </div>
  );
};

export default Error;
