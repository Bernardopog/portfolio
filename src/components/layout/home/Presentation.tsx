import { Roboto_Mono } from 'next/font/google';

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
      <p
        className={`mt-2 text-gradient text-xl xs:text-2xl sm:text-3xl duration-300 ${robotoMono.className}`}
      >
        Desenvolvedor{' '}
        <span className='inline-block h-fit px-2 bg-black dark:bg-white rounded-lg'>
          <span className='text-gradient-inverted'>Front</span>
        </span>{' '}
        end
      </p>
    </section>
  );
}
