import { Categoria } from "./categoria";

export interface Livro {
  id: number;
  nome: string;
  autor: string;
  paginas: number;
  categoria: Categoria
}