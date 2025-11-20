'use client';

import { useState } from 'react';
import type { TechFieldType } from '@/types/aliases/TechFieldType';
import type { TechNameType } from '@/types/aliases/TechNameType';
import { Accordion, AccordionHeader, ExplainCard } from './hardskill/';

export default function HardskillSubpage() {
  const [fieldOpen, setFieldOpen] = useState<TechFieldType | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [selectedTech, setSelectedTech] = useState<TechNameType | null>(null);

  const [showOnlyMain, setShowOnlyMain] = useState<boolean>(true);

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

  const handleTechSelection = (tech: TechNameType) => {
    if (selectedTech === tech.toLowerCase()) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  return (
    <section className='flex flex-col h-full gap-2 md:flex-row'>
      <div className='flex flex-col flex-1 gap-2'>
        <AccordionHeader
          showOnlyMain={showOnlyMain}
          setShowOnlyMain={setShowOnlyMain}
        />
        <Accordion
          fieldOpen={fieldOpen}
          handleFieldToOpen={handleFieldToOpen}
          showScrollbar={showScrollbar}
          showOnlyMain={showOnlyMain}
          selectedTech={selectedTech}
          handleTechSelection={handleTechSelection}
        />
      </div>
      <div className='flex flex-col flex-1 min-h-72 max-h-80 pb-8 border rounded-lg backdrop-blur-sm shadow-md border-black/30 shadow-black/25 dark:border-white/30 dark:shadow-white/25 md:max-h-[calc(100%-3.75rem)]'>
        {selectedTech ? (
          <ExplainCard tech={selectedTech} />
        ) : (
          <p className='text-center text-xl italic text-shark-950/75 dark:text-shark-50/75'>
            Selecione uma tecnologia
          </p>
        )}
      </div>
    </section>
  );
}
