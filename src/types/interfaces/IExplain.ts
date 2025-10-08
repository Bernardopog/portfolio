import { TechFieldType } from "../aliases/TechFieldType";

type TechCategoryType =
  | "linguagem"
  | "estilização"
  | "estático"
  | "tipagem"
  | "framework"
  | "biblioteca"
  | "pré-processador"
  | "orm"
  | "banco de dados"
  | "ferramenta"
  | "fullstack"
  | "plataforma"
  | "relacional"
  | "não relacional"
  | "controle de versão"
  | "design"
  | "prototipação"
  | "servidor";

export interface IExplain {
  title: string;
  field: TechFieldType;
  categories: TechCategoryType[] | string[];
  description: string;
  level: number;
}
