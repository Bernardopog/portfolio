type LanguageTechs =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'csharp'
  | 'python';
type JSUtilityLibraryTechs = 'jquery';
type PreprocessorTechs = 'sass' | 'less';
type FrameworkCssTechs = 'tailwind';
type CSSInJSFrameworkTechs = 'styled-components';
type JSFrameworkTechs = 'react' | 'vue' | 'angular' | 'svelte' | 'solid';
type PseudoJSFrameworkTechs = 'next' | 'nuxt';
type BackendFrameworkTechs = 'express' | 'nest' | 'asp.net';
type DatabaseTechs = 'postgresql' | 'mongodb';
type OrmAndOdmTechs = 'prisma';
type PlatformTechs = 'dotnet' | 'node';
type MobileTechs = 'react native';
type MobileFrameworkTechs = 'expo';
type MobileFrameworkCSSTechs = 'nativewind';
type ToolTechs = 'git' | 'figma';
type ServerSideUIFrameworks = 'flask' | 'blazor';
type StateManagerTechs = 'zustand' | 'pinia';
type BuildingToolTechs = 'vite';
type WebSocketTechs = 'socket.io';
type MonoRepoTechs = 'turborepo';
type BackendAsAServiceTechs = 'supabase' | 'firebase';

export type TechNameType =
  | LanguageTechs
  | JSUtilityLibraryTechs
  | PreprocessorTechs
  | FrameworkCssTechs
  | CSSInJSFrameworkTechs
  | JSFrameworkTechs
  | PseudoJSFrameworkTechs
  | BackendFrameworkTechs
  | DatabaseTechs
  | OrmAndOdmTechs
  | PlatformTechs
  | MobileTechs
  | MobileFrameworkTechs
  | MobileFrameworkCSSTechs
  | ToolTechs
  | ServerSideUIFrameworks
  | StateManagerTechs
  | BuildingToolTechs
  | WebSocketTechs
  | MonoRepoTechs
  | BackendAsAServiceTechs;
