'use client';

import { useSearchParams } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useAppViewStore } from '@/store/AppViewStore';
import type { ViewTypes } from '@/types/aliases/ViewTypes';

export default function SectionSwitcher({
  children,
}: {
  children: (view: ViewTypes, setView: (view: ViewTypes) => void) => ReactNode;
}) {
  const { currentView, setCurrentView } = useAppViewStore(
    useShallow((s) => ({
      currentView: s.currentView,
      setCurrentView: s.setCurrentView,
    })),
  );

  const params = useSearchParams();

  useEffect(() => {
    const view = params.get('view');
    if (view) {
      setCurrentView(view as ViewTypes);
    }
  }, [params, setCurrentView]);

  return (
    <div
      className={`grid duration-500 ease-in-out ${
        currentView === 'about'
          ? 'grid-cols-[1fr_0fr_0fr]'
          : currentView === 'project'
            ? 'grid-cols-[0fr_0fr_1fr]'
            : 'grid-cols-[0fr_1fr_0fr]'
      }`}
    >
      {children(currentView, setCurrentView)}
    </div>
  );
}
