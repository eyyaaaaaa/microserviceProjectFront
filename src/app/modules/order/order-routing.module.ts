import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';

const routes: Routes = [
  { path: '', component: OrderListComponent },         // Liste des commandes
  { path: 'create', component: OrderCreateComponent }  // Formulaire d'ajout
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
