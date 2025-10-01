"use client";

import { AboutPageInitial, AboutPageSpecific } from "@/components/AboutPage";
import type { AboutViewTypes } from "@/types/AboutViewTypes";
import { useState } from "react";

export default function AboutSection() {
  const [currentView, setCurrentView] = useState<AboutViewTypes>("none");

  const handleSectionChange = (toView: AboutViewTypes) => {
    setCurrentView(toView);
  };

  return (
    <section
      className={`grid grid-cols-[1fr] relative h-[calc(100dvh-3rem-3rem)] duration-500 ease-in-out md:h-[calc(100dvh-3rem)] ${
        currentView === "none" ? "grid-rows-[1fr_0fr]" : "grid-rows-[0fr_1fr]"
      }`}
    >
      <AboutPageInitial
        currentView={currentView}
        changeCurrentView={handleSectionChange}
      />
      <AboutPageSpecific
        currentView={currentView}
        changeCurrentView={handleSectionChange}
      />
    </section>
  );
}
