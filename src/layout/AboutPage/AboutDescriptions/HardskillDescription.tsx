import { getMainTechs } from "@/data/techList";

export default function HardskillDescription() {
  return (
    <>
      <p>Principais Tecnologias:</p>
      <ul className="grid grid-cols-2 mt-4 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {getMainTechs().map((tech) => (
          <li
            key={tech.name}
            className="group flex items-center p-1 rounded-lg border capitalize duration-300 ease-in-out text-shark-900 border-black/25 dark:text-shark-100 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="flex-1 text-center">{tech.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
