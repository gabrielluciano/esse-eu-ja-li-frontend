import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';

@NgModule({
  declarations: [
    ListaLivrosComponent,
    LivroDetalheComponent
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class LivroModule { }
