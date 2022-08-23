import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";

import { ListaLivrosComponent } from "./lista-livros/lista-livros.component";
import { LivroDetalheComponent } from "./livro-detalhe/livro-detalhe.component";

const routes: Routes = [
  { path: '', component: ListaLivrosComponent, canActivate: [AuthGuard] },
  { path: ':id', component: LivroDetalheComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule {
}