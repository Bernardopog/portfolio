"use client";

import { AboutViewTypes } from "@/types/AboutViewTypes";
import { ReactNode } from "react";

interface IAboutCardProps {
  className?: string;
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  animationDelay?: number;
  currentView: AboutViewTypes;
  changeCurrentView: (toView: AboutViewTypes) => void;
}

export default function AboutCard({
  className,
  icon,
  title,
  children,
  animationDelay,
  currentView,
  changeCurrentView,
}: IAboutCardProps) {
  return (
    <article
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`group relative min-w-72 w-9/10 max-w-xl sm:max-w-2xl h-64  shadow-lg hover:shadow-xl gradient-border ${className}`}
    >
      <button
        type="button"
        className="size-full p-4 rounded-lg bg-gradient-to-b from-shark-50 to-shark-100 text-shark-950 duration-300 ease-in-out dark:from-shark-900 dark:to-shark-950 dark:text-shark-100 dark:shadow-white/10 cursor-pointer"
        onClick={() => changeCurrentView(currentView)}
      >
        <header className="flex items-center gap-4">
          <div className="w-fit p-2 rounded-lg bg-transparent text-shark-900 duration-300 ease-in-out dark:text-shark-50 group-hover:bg-purple-heart-600 group-hover:text-shark-50 dark:group-hover:bg-punch-600">
            {icon}
          </div>
          <h2 className="text-xl font-medium">{title}</h2>
        </header>
        <section className="w-full h-[calc(100%-3rem-16px)] mt-2 p-2 overflow-y-auto text-start scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-900 text-shark-950/75 dark:scrollbar-thumb-shark-100 dark:text-shark-50/75">
          {children}
        </section>
        <span className="absolute bottom-1 right-4 text-sm select-none pointer-events-none duration-300 ease-in-out text-shark-950/40 group-hover:text-shark-950/75 dark:text-shark-50/20 dark:group-hover:text-shark-50/60">
          Clique para ver detalhes
        </span>
      </button>
    </article>
  );
}
