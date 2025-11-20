import { aboutContentMap } from '@/data/maps/about/aboutContentMap';
import type { AboutViewTypes } from '@/types/aliases/AboutViewTypes';

export default function AboutExpandedContent({
  currentView,
}: {
  currentView: AboutViewTypes;
}) {
  return (
    <div className='flex-1 w-full md:pl-10'>{aboutContentMap[currentView]}</div>
  );
}
