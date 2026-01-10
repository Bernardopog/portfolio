'use client';
import { useRouter } from 'next/navigation';
import { Inert } from '@/components/shared';
import {
  GridBackground,
  Navbar,
  SectionSwitcher,
} from '@/components/shared/layout';
import type { ViewTypes } from '@/types/aliases/ViewTypes';
import AboutPage from '@/views/about';
import HomePage from '@/views/home';
import ProjectPage from '@/views/project';

export default function HomeClient() {
  const router = useRouter();
  const goTo = (path: ViewTypes, action: (path: ViewTypes) => void) => {
    router.push(`?view=${path}`);
    action(path);
  };

  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <GridBackground view={view} />
          <Navbar
            onToMain={() => goTo('main', setView)}
            onToAbout={() => goTo('about', setView)}
            onToProject={() => goTo('project', setView)}
            view={view}
          />
          <Inert isVisible={view === 'about'} className='overflow-hidden'>
            <AboutPage isVisible={view === 'about'} />
          </Inert>
          <Inert isVisible={view === 'main'} className='overflow-hidden'>
            <HomePage
              onToAbout={() => goTo('about', setView)}
              onToProject={() => goTo('project', setView)}
            />
          </Inert>
          <Inert isVisible={view === 'project'} className='overflow-hidden'>
            <ProjectPage />
          </Inert>
        </>
      )}
    </SectionSwitcher>
  );
}
