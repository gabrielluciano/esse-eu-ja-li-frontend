import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Livro } from 'src/app/models/livro';
import { ClienteService } from 'src/app/services/cliente.service';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  livro!: Livro;
  cliente!: Cliente;
  livroLido: boolean = false;
  idCliente: number | null = null;

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {
    this.route.params.subscribe(params => {
      this.livroService.pesquisar(params['id'])
        .subscribe(livro => {
          this.livro = livro;
          this.getCliente();
        });
    });

  }

  ngOnInit(): void {
  }

  getCliente() {
    const storage = localStorage.getItem("ESSEEUJALI_AUTH");

    if (storage !== null) {
      const data: any = JSON.parse(storage);
      this.idCliente = data.id;
      this.clienteService.pesquisar(data.id)
        .subscribe(cliente => {
          this.cliente = cliente
          this.computarLeituraDoLivro();
        });
    }
  }

  computarLeituraDoLivro() {
    if (this.cliente.livros) {
      for (let livro of this.cliente.livros) {
        if (livro.id === this.livro.id) this.livroLido = true;
      }
    }
  }

  onClickLido() {
    if (this.idCliente)
      this.clienteService.adicionarLivro(this.idCliente, this.livro.id)
        .subscribe(status => {
          if (status == true) {
            this.getCliente();
          }
        });
  }

}
