import { FaUser } from 'react-icons/fa';
import { FaCode, FaEye, FaQuestion } from 'react-icons/fa6';
import { SiFrontendmentor } from 'react-icons/si';
import { techIconMap } from '@/data/content/techIconMap';
import type { IProject } from '@/types/interfaces/IProject';

export default function IntroContent({ project }: { project: IProject }) {
  const transformSource = (source: 'frontendmentor' | 'personal') =>
    source === 'frontendmentor' ? 'Frontend Mentor' : 'Projeto Pessoal';

  return (
    <header className='project-expanded-card flex flex-col relative gap-2 p-2 animate-lits-a-bit text-shark-800 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-950 dark:scrollbar-thumb-shark-50 dark:text-shark-200 md:row-start-2 md:row-end-4 md:overflow-y-auto'>
      <section
        className={`grid gap-2 ${project.source !== 'personal' ? 'grid-cols-2 xs:grid-cols-3' : 'grid-cols-2'}`}
      >
        <a
          href={project.links.github}
          target='_blank'
          className='btn-default btn-default-color flex items-center justify-between text-sm md:text-base'
        >
          Ver código
          <FaCode />
        </a>
        {project.source !== 'personal' && (
          <a
            href={project.links.source}
            target='_blank'
            className='btn-default btn-default-color flex items-center justify-between text-sm md:text-base'
          >
            Ver fonte
            <FaQuestion />
          </a>
        )}
        <a
          href={project.links.live}
          target='_blank'
          className={`btn-default btn-default-color flex items-center justify-between text-sm md:text-base ${project.source !== 'personal' && 'col-span-2 xs:col-span-1'}`}
        >
          Ver site
          <FaEye />
        </a>
      </section>
      <div
        className={`grid grid-cols-[1fr_0.5fr] gap-x-2 ${project.info.tagline ? 'grid-rows-2' : 'grid-rows-1'}`}
      >
        <h3>
          <span className='font-semibold text-xl text-shark-950 dark:text-shark-50 md:text-2xl'>
            {project.name}{' '}
          </span>
        </h3>
        <span className='row-start-2 col-span-2 text-sm italic opacity-75'>
          {project.info.tagline}
        </span>
        <span className='inline-flex items-center gap-2 text-xs'>
          <span>
            {project.source === 'frontendmentor' && <SiFrontendmentor />}
            {project.source === 'personal' && <FaUser />}{' '}
          </span>
          <span className='inline-block'>
            {transformSource(project.source)}
          </span>
        </span>
      </div>
      <section className='grid grid-cols-1 grid-rows-3 text-sm md:text-base lg:grid-cols-[0.75fr_0.5fr] lg:grid-rows-2'>
        <p className='row-span-2 flex items-center gap-2'>
          Status do Projeto:{' '}
          <span className='text-shark-950 dark:text-shark-50'>
            {project.info.status === 'completed' ? 'Concluido' : 'Em andamento'}
          </span>
          <span
            className={`inline-block size-2 rounded-full animate-pulse ${project.info.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}
          ></span>
        </p>
        <p className='inline-flex justify-between'>
          <span>Criado: </span>
          {project.info.createdAt.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
        <p className='inline-flex justify-between lg:col-start-2'>
          <span>Concluído: </span>
          {project.info.endedAt
            ? project.info.endedAt
                .toISOString()
                .replaceAll('-', '/')
                .split('T')[0]
            : '--/--/----'}
        </p>
      </section>
      <div className='flex text-sm gap-1 my-2 md:text-base'>
        <h3>
          {project.info.category.length > 1 ? 'Categorias: ' : 'Categoria: '}
        </h3>
        <ul className='flex flex-wrap gap-1'>
          {project.info.category.map((category, idx) => (
            <li
              key={category}
              className='capitalize text-shark-950 dark:text-shark-50'
            >
              {category}
              {idx === project.info.category.length - 1 ? '.' : ', '}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='text-base'>Tecnologias Utilizadas: </h3>
        <ul className='flex min-h-12 gap-2 p-1 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-950 dark:scrollbar-thumb-shark-50'>
          {project.techs.map((tech) => (
            <li
              key={tech}
              className='flex items-center justify-center min-w-20 rounded-lg border border-black/25 dark:border-white/25'
            >
              <span>{techIconMap[tech]}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
