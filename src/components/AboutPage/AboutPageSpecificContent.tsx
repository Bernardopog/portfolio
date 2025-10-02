import { aboutSpecificMap } from "@/data/aboutSpecificSubpageMap";
import { AboutViewTypes } from "@/types/AboutViewTypes";

export default function AboutPageSpecificContent({
  currentView,
}: {
  currentView: AboutViewTypes;
}) {
  return (
    <div className="flex-1 w-full md:pl-10">
      {aboutSpecificMap[currentView]}
    </div>
  );
}
