"use client";
import HomePage from "@/views/home";
import AboutPage from "@/views/about";
import { Inert } from "@/components/shared";
import {
  GridBackground,
  Navbar,
  SectionSwitcher,
} from "@/components/shared/layout";
import ProjectPage from "@/views/project";

export default function HomeClient() {
  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <GridBackground view={view} />
          <Inert isVisible={view === "about"} className="overflow-hidden">
            <AboutPage isVisible={view === "about"} />
          </Inert>
          <Inert isVisible={view === "main"} className="overflow-hidden">
            <HomePage
              onToAbout={() => setView("about")}
              onToProject={() => setView("project")}
            />
          </Inert>
          <Inert isVisible={view === "project"} className="overflow-hidden">
            <ProjectPage />
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
