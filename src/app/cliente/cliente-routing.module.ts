import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";

import { ClienteRankingComponent } from "./cliente-ranking/cliente-ranking.component";
import { ClienteComponent } from "./cliente.component";

const routes: Routes = [
  { path: '', component: ClienteComponent, canActivate: [AuthGuard] },
  { path: 'ranking', component: ClienteRankingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
