import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());

  // Function to get initial dark mode preference based on system theme
  function getInitialDarkMode() {
    // Check if dark mode is preferred by the user's OS
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  useEffect(() => {
    // Function to handle changes in system theme preference
    const handleDarkModeChange = (e) => {
      setDarkMode(e.matches);
    };

    // Add event listener for changes in system theme preference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    // Clean up function
    return () =>
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  }, []);

  // Function to toggle dark mode manually
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
