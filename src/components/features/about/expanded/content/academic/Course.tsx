import { useCourseStore } from '@/store/BookStore';
import { useNavbarStore } from '@/store/NavbarStore';
import type { ICourseContentProps } from '@/types/interfaces/ICourseContent';

export default function Course({
  description,
  instituiton,
  stripesColors,
  label,
  abbreviation,
  startYear,
  endYear,
}: ICourseContentProps) {
  const selectBook = useCourseStore((s) => s.selectCourse);
  const blockNavbar = useNavbarStore((s) => s.blockNavbar);

  return (
    <li className='shadow-md'>
      <button
        type='button'
        onClick={() => {
          selectBook(label);
          blockNavbar();
        }}
        className='group relative flex flex-col h-38 p-1 border rounded-lg backdrop-blur-xs overflow-clip border-black/15 text-shark-950 dark:text-shark-50 dark:border-white/15 animate-expand-horizontal cursor-pointer text-left xs:h-40 sm:h-32'
      >
        <h3 className='text-sm xs:text-base'>
          {label.length > 20 ? (
            <abbr
              title={label}
              className='border-b border-dotted border-black/25 dark:border-white/25 [text-decoration:none]'
            >
              {abbreviation}
            </abbr>
          ) : (
            label
          )}
          <span className='opacity-75 xs:text-sm'> - ({instituiton})</span>
        </h3>
        <p className='block mt-2 text-sm opacity-75'>{description}</p>
        <p className='absolute top-1 right-1 text-xs opacity-50 duration-300 ease-in-out group-hover:opacity-75'>
          {startYear} - {endYear ?? 'inc.'}
        </p>
        <div className='absolute bottom-16 -right-32 -z-10 rotate-45 opacity-25 duration-300 ease-in-out group-hover:opacity-5'>
          <div className='flex flex-col items-end gap-1'>
            {stripesColors?.map((color, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable List>
                key={index}
                className='w-64 h-3'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </button>
    </li>
  );
}
