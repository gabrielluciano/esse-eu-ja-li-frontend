import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Livro } from 'src/app/models/livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  livros!: Livro[];

  constructor(
    private livroService: LivroService,
    private router: Router
  ) { 
    this.livroService.listar().subscribe(livros => this.livros = livros);
  }

  ngOnInit(): void {
  }

  onClickLivro(id: number) {
    this.router.navigate(['livros/' + id]);
  }

}
