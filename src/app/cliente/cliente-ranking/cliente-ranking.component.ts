import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import calcularPontuacao from 'src/app/utils/calcularPontuacao';

@Component({
  selector: 'app-cliente-ranking',
  templateUrl: './cliente-ranking.component.html',
  styleUrls: ['./cliente-ranking.component.css']
})
export class ClienteRankingComponent implements OnInit {

  ranking: any = null;

  constructor(private clienteService: ClienteService) {
    this.clienteService.listar().subscribe(clientes => {
      this.calcularRanking(clientes);
    });
  }

  ngOnInit(): void {
  }

  calcularRanking(clientes: Cliente[]) {
    const pontuacoes = [];

    if (clientes) {
      for (let cliente of clientes) {
        const pontuacao = calcularPontuacao(cliente.livros);
        pontuacoes.push({
          nome: cliente.nome,
          pontuacao
        });
      }
    }
    
    this.ranking = pontuacoes.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    }).slice(0, 10);
  }

}
