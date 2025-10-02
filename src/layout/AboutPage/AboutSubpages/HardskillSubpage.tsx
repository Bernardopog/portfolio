"use client";

import ExplainCard from "@/components/AboutPage/ExplainCard";
import Inert from "@/components/Inert";
import { getTechByField, TechFieldType } from "@/data/techList";
import { Fragment, ReactNode, useState } from "react";
import { FaTools } from "react-icons/fa";
import { FaDesktop, FaMobile, FaServer } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";

export default function HardskillSubpage() {
  const dataList: { title: string; list: TechFieldType; icon: ReactNode }[] = [
    {
      title: "Front-end",
      list: "frontend",
      icon: <FaDesktop />,
    },
    {
      title: "Back-end",
      list: "backend",
      icon: <FaServer />,
    },
    {
      title: "Mobile",
      list: "mobile",
      icon: <FaMobile />,
    },
    {
      title: "Ferramentas",
      list: "tools",
      icon: <FaTools />,
    },
  ];

  const [fieldOpen, setFieldOpen] = useState<TechFieldType | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleFieldToOpen = (field: TechFieldType) => {
    setShowScrollbar(false);
    if (fieldOpen === field) {
      setFieldOpen(null);
    } else {
      const t = setTimeout(() => {
        setShowScrollbar(true);
      }, 300);
      setFieldOpen(field);
      return () => clearTimeout(t);
    }
  };

  const handleTechSelection = (tech: string) => {
    if (selectedTech === tech.toLowerCase()) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech.toLowerCase());
    }
  };

  return (
    <section className="flex flex-col h-full gap-2 md:flex-row">
      <dl className="flex flex-col flex-1 order-1 max-h-60 px-1 pb-16 gap-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-800 dark:scrollbar-thumb-shark-300 md:gap-2 md:order-0 md:max-h-full md:px-0">
        {dataList.map((item) => (
          <Fragment key={`field-${item.title}`}>
            <dt
              className={`flex items-center justify-between p-2 bg-gradient-to-b cursor-pointer from-shark-50 to-shark-100 text-shark-950 dark:from-shark-900 dark:to-shark-950 dark:text-shark-50 ${
                fieldOpen === item.list ? "rounded-t-lg" : "rounded-lg"
              }`}
              onClick={() => handleFieldToOpen(item.list)}
            >
              <span className="inline-flex items-center gap-4 sm:text-lg">
                {item.title}
                <span className="hidden opacity-25 sm:inline dark:opacity-10">
                  {item.icon}
                </span>
              </span>
              <IoCaretDownSharp
                className={`opacity-75 duration-300 ease-in-out ${
                  fieldOpen === item.list && "rotate-180"
                }`}
              />
            </dt>
            <dd
              className={`overflow-hidden duration-300 ease-in-out scrollbar-track-transparent scrollbar-thumb-shark-900 dark:scrollbar-thumb-shark-100 ${
                fieldOpen === item.list ? "min-h-40 h-40" : "min-h-0 h-0"
              } ${showScrollbar && "overflow-y-auto scrollbar-thin"}`}
            >
              <Inert isVisible={fieldOpen === item.list}>
                <ul className="grid grid-cols-2 my-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {getTechByField(item.list).map((tech) => (
                    <li key={tech.name} className="rounded-lg">
                      <button
                        type="button"
                        className={`flex flex-col justify-center items-center size-full p-1 border rounded-lg duration-300 ease-in-out backdrop-blur-2xl cursor-pointer  text-shark-900 dark:text-shark-100 ${
                          selectedTech === tech.name.toLowerCase()
                            ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20"
                            : "border-black/25 hover:bg-black/10 dark:border-white/25 dark:hover:bg-white/10"
                        }`}
                        onClick={() => handleTechSelection(tech.name)}
                      >
                        <span className="text-lg fill-shark-950 dark:fill-shark-50 md:text-2xl">
                          {tech.icon}
                        </span>
                        <span className="capitalize text-xs text-center text-shark-800 dark:text-shark-200 sm:text-sm">
                          {tech.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Inert>
            </dd>
          </Fragment>
        ))}
      </dl>
      <div className="flex flex-col flex-[0.9] border rounded-lg backdrop-blur-sm shadow-md border-black/30 shadow-black/25 dark:border-white/30 dark:shadow-white/25">
        {selectedTech ? (
          <ExplainCard tech={selectedTech} />
        ) : (
          <p className="text-center text-xl italic text-shark-950/75 dark:text-shark-50/75">
            Selecione uma tecnologia
          </p>
        )}
      </div>
    </section>
  );
}
