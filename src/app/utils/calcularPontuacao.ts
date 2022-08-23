import { Livro } from "../models/livro";

export default function calcularPontuacao(livros?: Livro[]): number {
  let pontuacao = 0;

  if (livros) {
    for (let livro of livros) {
      pontuacao += Math.floor(livro.paginas / 100) + 1;
    }
  }

  return pontuacao;
}