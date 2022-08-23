import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteRankingComponent } from './cliente-ranking/cliente-ranking.component';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteRankingComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatListModule
  ]
})
export class ClienteModule { }
