"use client";

import { AboutExpanded, AboutIntro } from "@/components/layout/about";
import type { AboutViewTypes } from "@/types/aliases/AboutViewTypes";
import { useState } from "react";

interface IAboutSectionProps {
  isVisible: boolean;
}

export default function AboutPage({ isVisible }: IAboutSectionProps) {
  const [currentView, setCurrentView] = useState<AboutViewTypes>("none");

  const handleSectionChange = (toView: AboutViewTypes) => {
    setCurrentView(toView);
  };

  return (
    <section
      className={`grid grid-cols-[1fr] relative h-[calc(100dvh-3rem-3rem)] pb-2 duration-500 ease-in-out md:h-[calc(100dvh-3rem)] ${
        currentView === "none" ? "grid-rows-[1fr_0fr]" : "grid-rows-[0fr_1fr]"
      }`}
    >
      <AboutIntro
        currentView={currentView}
        changeCurrentView={handleSectionChange}
        isVisible={isVisible}
      />
      <AboutExpanded
        currentView={currentView}
        changeCurrentView={handleSectionChange}
      />
    </section>
  );
}
