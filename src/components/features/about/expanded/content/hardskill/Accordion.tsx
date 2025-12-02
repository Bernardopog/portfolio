import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import { Inert } from '@/components/shared';
import { techFieldDataList } from '@/data/content/about/techFieldDataList';
import { techIconMap } from '@/data/content/techIconMap';
import {
  getMainTechByField,
  getTechByField,
} from '@/data/helpers/tech/techListHelpers';
import type { TechFieldType } from '@/types/aliases/TechFieldType';
import type { TechNameType } from '@/types/aliases/TechNameType';

interface IAccordionProps {
  fieldOpen: string | null;
  handleFieldToOpen: (field: TechFieldType) => void;
  showScrollbar: boolean;
  showOnlyMain: boolean;
  selectedTech: string | null;
  handleTechSelection: (tech: TechNameType) => void;
}

export default function Accordion({
  fieldOpen,
  handleFieldToOpen,
  showScrollbar,
  showOnlyMain,
  selectedTech,
  handleTechSelection,
}: IAccordionProps) {
  const t = useTranslations('AboutMe');

  return (
    <dl className='flex flex-col flex-1 order-1 max-h-60 px-1 pb-16 gap-1 overflow-y-auto scrollbar-base md:gap-2 md:order-0 md:max-h-full md:px-0'>
      {techFieldDataList.map((item) => (
        <Fragment key={`field-${item.title}`}>
          <dt
            className={`flex items-center justify-between p-2 bg-gradient-to-b cursor-pointer from-shark-50 to-shark-100 text-shark-950 dark:from-shark-900 dark:to-shark-950 dark:text-shark-50 ${
              fieldOpen === item.list ? 'rounded-t-lg' : 'rounded-lg'
            }`}
            onClick={() => handleFieldToOpen(item.list)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFieldToOpen(item.list);
              }
            }}
          >
            <span className='inline-flex items-center gap-4 sm:text-lg'>
              {item.key
                ? t(`Expanded.Hardskill.AccordionListTitle.${item.key}`)
                : item.title}
              <span className='hidden opacity-25 sm:inline dark:opacity-10'>
                {item.icon}
              </span>
            </span>
            <IoCaretDownSharp
              className={`opacity-75 duration-300 ease-in-out ${
                fieldOpen === item.list && 'rotate-180'
              }`}
            />
          </dt>
          <dd
            className={`overflow-hidden duration-300 ease-in-out scrollbar-base ${
              fieldOpen === item.list ? 'min-h-40 h-40' : 'min-h-0 h-0'
            } ${showScrollbar && 'overflow-y-auto scrollbar-thin'}`}
          >
            <Inert isVisible={fieldOpen === item.list}>
              <ul className='grid grid-cols-2 my-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {showOnlyMain ? (
                  <>
                    {getMainTechByField(item.list).map((tech) => (
                      <li key={tech.name} className='rounded-lg'>
                        <button
                          type='button'
                          className={`flex flex-col justify-center items-center size-full p-1 border rounded-lg duration-300 ease-in-out backdrop-blur-2xl cursor-pointer  text-shark-900 dark:text-shark-100 ${
                            selectedTech === tech.name.toLowerCase()
                              ? 'bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20'
                              : 'border-black/25 hover:bg-black/10 dark:border-white/25 dark:hover:bg-white/10'
                          }`}
                          onClick={() => handleTechSelection(tech.name)}
                        >
                          <span className='text-lg fill-shark-950 dark:fill-shark-50 md:text-2xl'>
                            {techIconMap[tech.name]}
                          </span>
                          <span className='capitalize text-xs text-center text-shark-800 dark:text-shark-200 sm:text-sm'>
                            {tech.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {getTechByField(item.list).map((tech) => (
                      <li key={tech.name} className='rounded-lg'>
                        <button
                          type='button'
                          className={`flex flex-col justify-center items-center size-full p-1 border rounded-lg duration-300 ease-in-out backdrop-blur-2xl cursor-pointer  text-shark-900 dark:text-shark-100 ${
                            selectedTech === tech.name.toLowerCase()
                              ? 'bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20'
                              : 'border-black/25 hover:bg-black/10 dark:border-white/25 dark:hover:bg-white/10'
                          }`}
                          onClick={() => handleTechSelection(tech.name)}
                        >
                          <span className='text-lg fill-shark-950 dark:fill-shark-50 md:text-2xl'>
                            {techIconMap[tech.name]}
                          </span>
                          <span className='capitalize text-xs text-center text-shark-800 dark:text-shark-200 sm:text-sm'>
                            {tech.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </Inert>
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
