import React from "react";
// import { RiMailSendFill } from "@remixicon/react";

const Button = (props) => {
  return (
    <button className="comic-button dark:shadow-slate-500 dark:bg-[#b3d4fc] dark:text-primary dark:hover:text-accent dark:active:bg-accent-quaternary dark:active:shadow-none dark:active:text-primary">
      {props.value}
    </button>
  );
};

export default Button;
