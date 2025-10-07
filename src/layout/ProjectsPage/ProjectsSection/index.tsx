"use client";

import ProjectList from "@/components/ProjectsPage/ProjectList";
import ProjectsFilter from "@/components/ProjectsPage/ProjectsFilter";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col relative w-full max-h-dvh px-4 overflow-hidden md:pl-14">
      <ProjectsFilter />
      <ProjectList />
    </section>
  );
}
