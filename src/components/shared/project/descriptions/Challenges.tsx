'use client';
import { MdArrowDropDown, MdListAlt } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useProjectDescriptionStore } from '@/store/ProjectDescriptionStore';
import type { IChallenges } from '@/types/interfaces/IProject';

export default function Challenges({
  challengeList,
}: {
  challengeList: IChallenges[];
}) {
  const { toggleField, isChallengeOpen } = useProjectDescriptionStore(
    useShallow((s) => ({
      toggleField: s.toggleField,
      isChallengeOpen: s.isChallengeOpen,
    })),
  );

  return (
    <section className='p-1 rounded-lg border shadow-xl border-black/5 text-shark-800 dark:border-white/5 dark:text-shark-300'>
      <button
        type='button'
        className='flex justify-between w-full cursor-pointer'
        onClick={() => toggleField('isChallengeOpen')}
      >
        <h3 className='inline-flex items-center gap-2'>
          <span className='font-medium text-lg text-shark-900 dark:text-shark-100'>
            Desafios
          </span>
          <span className='text-xl'>{<MdListAlt />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isChallengeOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={`flex flex-col rounded-lg gap-2 overflow-clip duration-300 ease-in-out border-black/5 dark:border-white/5 ${isChallengeOpen ? 'max-h-100 p-1 mt-1 border' : 'max-h-0 p-0 mt-0'}`}
      >
        {challengeList.map((challenge, index) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
            key={index}
            className='flex text-sm items-center justify-between p-1 rounded-md duration-300 ease-out hover:bg-black/10 dark:hover:bg-white/10'
            title={challenge.difficultyReason}
          >
            <div className='flex items-center'>
              <p>{challenge.name}</p>
              {challenge.difficulty && (
                <div
                  className={`size-2 ml-2 rounded-full ${challenge.difficulty === 'low' ? 'bg-green-500' : challenge.difficulty === 'mid' ? 'bg-yellow-500' : 'bg-red-500'}`}
                ></div>
              )}
            </div>
            <span className='capitalize text-sm text-shark-500'>
              ({challenge.category})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
