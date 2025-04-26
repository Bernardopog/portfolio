"use client";

import { useEffect, useState } from "react";

export function GridBackground({ view }: { view: string }) {
  const [gridClass, setGridClass] = useState("grid-bg-light dark:grid-bg-dark");

  useEffect(() => {
    if (view === "project") {
      setGridClass("grid-transition-light dark:grid-transition-dark");

      const timeout = setTimeout(() => {
        setGridClass(
          "grid-transition-light grid-animated dark:grid-transition-dark"
        );
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setGridClass(
        "grid-bg-light grid-transition-back-light dark:grid-bg-dark dark:grid-transition-back-dark"
      );
    }
  }, [view]);

  return (
    <div className="absolute inset-0 -z-10 perspective-[1000px] overflow-clip">
      <div className={`w-full h-[200%] will-change-transform ${gridClass}`} />
    </div>
  );
}
