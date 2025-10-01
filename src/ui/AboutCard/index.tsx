import { ReactNode } from "react";

interface IAboutCardProps {
  className?: string;
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  animationDelay?: number;
}

export default function AboutCard({
  className,
  icon,
  title,
  children,
  animationDelay,
}: IAboutCardProps) {
  return (
    <article
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`group relative min-w-72 w-9/10 max-w-xl sm:max-w-2xl h-64 p-4 rounded-lg bg-gradient-to-b from-shark-50 to-shark-100 text-shark-950 shadow-lg duration-300 ease-in-out hover:shadow-xl dark:from-shark-900 dark:to-shark-950 dark:text-shark-100 dark:shadow-white/10 gradient-border ${className}`}
    >
      <header className="flex items-center gap-4">
        <div className="w-fit p-2 rounded-lg bg-transparent text-shark-900 duration-300 ease-in-out dark:text-shark-50 group-hover:bg-purple-heart-600 group-hover:text-shark-50 dark:group-hover:bg-punch-600">
          {icon}
        </div>
        <h2 className="text-xl font-medium">{title}</h2>
      </header>
      <section className="w-full h-[calc(100%-3rem)] mt-2 p-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-900 dark:scrollbar-thumb-shark-100">
        {children}
      </section>
    </article>
  );
}
