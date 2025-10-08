# Readme WIP

## Estrutura de Pastas

```plaintext
src/
├── app/ # Arquivos base do Next.js (layout, página raiz, estilos globais)
│ └── css/ # Estilos globais
├── assets/ # Arquivos estáticos como imagens, ícones e constantes
│ ├── constants/ # Valores fixos reutilizáveis
│ ├── svg/ # Ícones SVG
│ └── webp/ # Imagens em formato WebP
├── components/ # Componentes organizados por escopo
│ ├── features/ # Componentes funcionais específicos de uma feature
│ ├── layout/ # Componentes estruturais específicos de uma página
│ ├── shared/ # Componentes reutilizáveis entre páginas (com lógica)
│ └── ui/ # Componentes visuais sem lógica
├── data/ # Fontes de dados estáticos e lógicos
│ ├── content/ # Dados estáticos como listas, textos e techs
│ ├── helpers/ # Funções utilitárias para manipular dados de data
│ ├── maps/ # Objetos de mapeamento
│ └── mock/ # Dados simulados para testes ou placeholders
├── hooks/ # Custom hooks reutilizáveis
├── types/ # Tipagens globais
│ ├── aliases/ # Aliases simples (ex: union de strings e tipos)
│ └── interfaces/ # Interfaces mais complexas (props, objetos)
├── utils/ # Funções utilitárias genéricas
└── views/ # Páginas organizadas por domínio
├── about/ # Página About
├── home/ # Página Home
└── project/ # Página Project
```
