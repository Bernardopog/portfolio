import type { ReactNode } from 'react';

interface IWorkInProgressProps {
  content: string;
  icon: ReactNode;
}

export default function WorkInProgress({
  content,
  icon,
}: IWorkInProgressProps) {
  return (
    <div className='flex flex-col items-center justify-center size-full p-4 gap-16 rounded-lg bg-gradient-to-b from-shark-900 to-shark-950'>
      <span className='text-8xl text-shark-50/25'>{icon}</span>
      <p className='font-bold text-center text-2xl text-shark-50'>{content}</p>
    </div>
  );
}
