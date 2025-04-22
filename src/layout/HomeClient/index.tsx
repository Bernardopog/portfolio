"use client";
import Inert from "@/components/Inert";
import AboutSection from "@/layout/AboutSection";
import MainSection from "@/layout/MainSection";
import ProjectsSection from "@/layout/ProjectsSection";
import SectionSwitcher from "@/layout/SectionSwitcher";
import Navbar from "../Navbar";

export default function HomeClient() {
  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <Inert isActive={view !== "about"} className="overflow-hidden">
            <AboutSection onToMain={() => setView("main")} />
          </Inert>
          <Inert isActive={view !== "main"} className="overflow-hidden">
            <MainSection
              onToAbout={() => setView("about")}
              onToProject={() => setView("project")}
            />
          </Inert>
          <Inert isActive={view !== "project"} className="overflow-hidden">
            <ProjectsSection onToMain={() => setView("main")} />
          </Inert>
          <Navbar
            onToMain={() => setView("main")}
            onToAbout={() => setView("about")}
            onToProject={() => setView("project")}
          />
        </>
      )}
    </SectionSwitcher>
  );
}
