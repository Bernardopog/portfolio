"use client";

import { ProjectFilter, ProjectList } from "@/components/layout/project";

export default function ProjectPage() {
  return (
    <section className="flex flex-col relative w-full max-h-dvh px-4 overflow-hidden md:pl-14">
      <ProjectFilter />
      <ProjectList />
    </section>
  );
}
