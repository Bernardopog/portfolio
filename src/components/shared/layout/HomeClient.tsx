'use client';
import { Inert } from '@/components/shared';
import {
  GridBackground,
  Navbar,
  SectionSwitcher,
} from '@/components/shared/layout';
import AboutPage from '@/views/about';
import HomePage from '@/views/home';
import ProjectPage from '@/views/project';

export default function HomeClient() {
  return (
    <SectionSwitcher>
      {(view, setView) => (
        <>
          <GridBackground view={view} />
          <Navbar
            onToMain={() => setView('main')}
            onToAbout={() => setView('about')}
            onToProject={() => setView('project')}
            view={view}
          />
          <Inert isVisible={view === 'about'} className='overflow-hidden'>
            <AboutPage isVisible={view === 'about'} />
          </Inert>
          <Inert isVisible={view === 'main'} className='overflow-hidden'>
            <HomePage
              onToAbout={() => setView('about')}
              onToProject={() => setView('project')}
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
