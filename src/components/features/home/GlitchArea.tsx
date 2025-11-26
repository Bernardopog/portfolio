'use client';

import { useEffect, useRef, useState } from 'react';

export default function GlitchArea({ fontFamily }: { fontFamily?: string }) {
  const [area, setArea] = useState('Front end');
  const pRef = useRef<HTMLParagraphElement>(null);
  const glitchFirstHelper = useRef<HTMLParagraphElement>(null);
  const glitchSecondHelper = useRef<HTMLParagraphElement>(null);

  const [expandInvert, setExpandInvert] = useState(false);
  const [glitchCompleted, setGlitchCompleted] = useState(false);

  useEffect(() => {
    pRef.current?.classList.add('glitched');
    glitchFirstHelper.current?.classList.remove('opacity-0');
    glitchSecondHelper.current?.classList.remove('opacity-0');

    const timer = setTimeout(() => {
      pRef.current?.classList.remove('glitched');
      setArea('Full Stack');
      setGlitchCompleted(true);
    }, 5500);

    const timertToInvert = setTimeout(() => {
      setExpandInvert(true);
    }, 6500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timertToInvert);
    };
  }, []);

  return (
    <div className='relative'>
      <span
        className={`absolute top-0 left-69 z-10 h-full rounded-lg bg-transparent backdrop-invert duration-300 ease-in-out ${expandInvert ? 'w-20' : 'w-0'}`}
      ></span>

      <p
        ref={pRef}
        className={`mt-2 text-gradient text-xl xs:text-2xl sm:text-3xl duration-300 ${fontFamily}`}
      >
        {!glitchCompleted && (
          <span aria-hidden data-glitch-helper className='opacity-0'>
            Desenvolvedor Front end
          </span>
        )}
        Desenvolvedor <span data-area>{area}</span>
        {!glitchCompleted && (
          <span aria-hidden data-glitch-helper className='opacity-0'>
            Desenvolvedor Front end
          </span>
        )}
      </p>
    </div>
  );
}
