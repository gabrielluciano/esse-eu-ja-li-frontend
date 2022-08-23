import { Component, OnInit } from '@angular/core';

import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import calcularPontuacao from '../utils/calcularPontuacao';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  private readonly LIMTE_TROFEU = 2;
  cliente!: Cliente;
  idCliente: number | null = null;
  pontuacao = 0;
  trofeus: string[] = [];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente() {
    const storage = localStorage.getItem("ESSEEUJALI_AUTH");

    if (storage !== null) {
      const data: any = JSON.parse(storage);
      this.idCliente = data.id;
      this.clienteService.pesquisar(data.id)
        .subscribe(cliente => {
          this.cliente = cliente
          this.pontuacao = calcularPontuacao(this.cliente.livros);
          this.calcularTrofeis()
        });
    }
  }

  calcularTrofeis() {
    const trofeus = new Map();
    const livros = this.cliente.livros;

    if (livros) {
      for (let livro of livros) {
        if (trofeus.has(livro.categoria.nome)) {
          const novoValor = trofeus.get(livro.categoria.nome) + 1;
          trofeus.set(livro.categoria.nome, novoValor);
        } else {
          trofeus.set(livro.categoria.nome, 1);
        }
      }
    }

    trofeus.forEach((valor, chave) => {
      if (valor >= this.LIMTE_TROFEU) {
        this.trofeus.push(chave);
      }
    });
  }
}
