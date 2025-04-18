"use client";
import AboutSection from "@/layout/AboutSection";
import MainSection from "@/layout/MainSection";
import ProjectsSection from "@/layout/ProjectsSection";
import SectionSwitcher from "@/layout/SectionSwitcher";

export default function HomeClient() {
  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <AboutSection onToMain={() => setView("main")} />
          <MainSection
            onToAbout={() => setView("about")}
            onToProject={() => setView("project")}
          />
          <ProjectsSection onToMain={() => setView("main")} />
        </>
      )}
    </SectionSwitcher>
  );
}
