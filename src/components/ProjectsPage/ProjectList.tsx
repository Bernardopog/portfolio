import { projectList } from "@/data/projectList";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <main className="flex-1 grid grid-cols-1 max-h-[calc(100dvh-8rem-3rem)] gap-2 my-2 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-950 dark:scrollbar-thumb-shark-50 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projectList.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </main>
  );
}
