'use client';
import { MdOpenInFull, MdOutlineCloseFullscreen } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { Button } from '@/components/ui';
import { useProjectDescriptionStore } from '@/store/ProjectDescriptionStore';

export default function DescriptionContentController() {
  const { closeAll, openAll } = useProjectDescriptionStore(
    useShallow((s) => ({
      closeAll: s.closeAll,
      openAll: s.openAll,
    })),
  );

  return (
    <section className='flex items-center justify-center sticky top-0 left-1/2 -translate-x-1/2 z-10 max-h-0 w-fit gap-2 opacity-0 duration-300 ease-in-out group-hover:max-h-32 group-hover:opacity-100'>
      <Button
        ariaLabel='Abrir todos Accordions'
        className='btn-default-color flex items-center justify-center border rounded-full p-1 shadow-lg hover:shadow-xl'
        action={() => openAll()}
        icon={<MdOpenInFull className='text-xl' />}
      />
      <Button
        ariaLabel='Fechar todos Accordions'
        className='btn-default-color flex items-center justify-center border rounded-full p-1 shadow-lg hover:shadow-xl'
        action={() => closeAll()}
        icon={<MdOutlineCloseFullscreen className='text-xl' />}
      />
    </section>
  );
}
