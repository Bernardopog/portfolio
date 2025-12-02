import { Roboto_Mono } from 'next/font/google';
import { GlitchArea } from '@/components/features/home';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: 'variable',
  style: 'normal',
  variable: '--font-roboto-mono',
});

export default function Presentation() {
  return (
    <section className='text-center'>
      <h1
        className={`inline-block text-nowrap h-fit py-1 text-2xl font-bold text-gradient duration-300 xs:text-3xl sm:text-4xl md:text-5xl ${robotoMono.className}`}
      >
        Bernardo Poggioni
      </h1>
      <GlitchArea fontFamily={robotoMono.className} />
    </section>
  );
}
