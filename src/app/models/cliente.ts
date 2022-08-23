import { Livro } from "./livro";

export interface Cliente {
  id: number
  nome: string;
  usuario: string;
  senha: string;
  livros?: Livro[]
}