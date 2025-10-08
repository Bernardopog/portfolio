"use client";

import { ViewTypes } from "@/types/aliases/ViewTypes";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export default function SectionSwitcher({
  children,
}: {
  children: (
    view: ViewTypes,
    setView: Dispatch<SetStateAction<ViewTypes>>
  ) => ReactNode;
}) {
  const [view, setView] = useState<ViewTypes>("main");

  return (
    <div
      className={`grid duration-500 ease-in-out ${
        view === "about"
          ? "grid-cols-[1fr_0fr_0fr]"
          : view === "project"
          ? "grid-cols-[0fr_0fr_1fr]"
          : "grid-cols-[0fr_1fr_0fr]"
      }`}
    >
      {children(view, setView)}
    </div>
  );
}
