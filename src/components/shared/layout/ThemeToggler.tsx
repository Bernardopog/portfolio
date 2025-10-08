"use client";

import { useThemeTogglerStore } from "@/store/ThemeTogglerStore";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useShallow } from "zustand/shallow";

export default function ThemeToggler({ darkMode }: { darkMode: boolean }) {
  const { isDarkMode, setIsDarkMode, toggleTheme } = useThemeTogglerStore(
    useShallow((s) => ({
      isDarkMode: s.isDarkMode,
      setIsDarkMode: s.setIsDarkMode,
      toggleTheme: s.toggleTheme,
    }))
  );

  const [isMoving, setIsMoving] = useState<boolean>(false);

  const handleThemeChange = () => {
    toggleTheme();
    setIsMoving(true);
    document.cookie = `theme=${isDarkMode ? "light" : "dark"}; path=/`;
    document.documentElement.classList.toggle("dark");

    setTimeout(() => {
      setIsMoving(false);
    }, 300);
  };

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode, setIsDarkMode]);

  return (
    <button
      className="flex items-center w-16 p-0.5 rounded-full shadow-lg border-black bg-white shadow-black/15 cursor-pointer dark:bg-black dark:border-white dark:shadow-white/15"
      onClick={() => handleThemeChange()}
      aria-label="Alterar tema"
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
