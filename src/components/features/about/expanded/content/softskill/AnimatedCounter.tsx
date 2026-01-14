import { useEffect, useState } from 'react';

export default function AnimatedCounter({
  target,
  duration,
}: {
  target: number;
  duration: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const easeOut = (progress: number) => 1 - (1 - progress) ** 3;

    const step = (timeByBrowser: number) => {
      if (!startTime) startTime = timeByBrowser;
      const progress = Math.min((timeByBrowser - startTime) / duration, 1);
      const easedProgress = easeOut(progress);
      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span className='text-gradient text-xl sm:text-2xl lg:text-4xl font-black'>
      {count}
    </span>
  );
}
