import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
