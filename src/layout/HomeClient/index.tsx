"use client";
import Inert from "@/components/Inert";
import AboutSection from "@/layout/AboutPage/AboutSection";
import MainSection from "@/layout/MainSection";
import ProjectsSection from "@/layout/ProjectsPage/ProjectsSection";
import SectionSwitcher from "@/layout/SectionSwitcher";
import Navbar from "../Navbar";
import { GridBackground } from "../GridBackground";

export default function HomeClient() {
  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <GridBackground view={view} />
          <Inert isVisible={view === "about"} className="overflow-hidden">
            <AboutSection isVisible={view === "about"} />
          </Inert>
          <Inert isVisible={view === "main"} className="overflow-hidden">
            <MainSection
              onToAbout={() => setView("about")}
              onToProject={() => setView("project")}
            />
          </Inert>
          <Inert isVisible={view === "project"} className="overflow-hidden">
            <ProjectsSection />
          </Inert>
          <Navbar
            onToMain={() => setView("main")}
            onToAbout={() => setView("about")}
            onToProject={() => setView("project")}
            view={view}
          />
        </>
      )}
    </SectionSwitcher>
  );
}
