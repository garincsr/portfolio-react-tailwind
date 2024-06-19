import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  const [color, setColor] = useState("#ffd700"); // Default color

  useEffect(() => {
    const theme = sessionStorage.getItem("theme");
    if (theme === "dark") {
      setColor("#ffd700"); // Gold color for dark theme
    } else {
      setColor("#2962ad"); // Default dark color
    }
  }, []); // Empty dependency array to run only on mount

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="flex flex-col gap-y-6 transition-all duration-100 h-[100vh] overflow-hidden bg-slate-300 justify-center items-center dark:bg-darkDarkBlue">
      <div className="">
        <PacmanLoader
          color={color}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      <div className="">
        <h3 className="h3 animate-[bounceOut_2s] ease-in-out text-center opacity-85 text-darkDarkBlue dark:text-darkLightBlue">
          Now Loading...
        </h3>
      </div>
    </div>
  );
};

export default Loading;
