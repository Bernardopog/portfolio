"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [isMoving, setIsMoving] = useState<boolean>(false);

  const handleThemeChange = () => {
    const html = document.documentElement;
    const localStorage = window.localStorage;

    setIsDarkMode(!isDarkMode);
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 300);

    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      html.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    const localStorage = window.localStorage;
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setIsDarkMode(true);
      html.classList.add("dark");
    } else {
      setIsDarkMode(false);
      html.classList.remove("dark");
    }
  }, []);

  return (
    <button
      className="flex items-center w-16 p-0.5 rounded-full shadow-lg border-black bg-white shadow-black/15 cursor-pointer dark:bg-black dark:border-white dark:shadow-white/15"
      onClick={() => handleThemeChange()}
    >
      <div
        className={`flex items-center justify-center size-6 rounded-full bg-black text-white duration-300 ease-in-out transition-transform dark:bg-white dark:text-black dark:translate-x-[150%]
        ${isMoving && "animate-moving"}`}
      >
        {isDarkMode ? <FaMoon className="text-xl" /> : <FaSun />}
      </div>
    </button>
  );
}
