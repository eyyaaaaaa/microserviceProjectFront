import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule
  ],
  exports: [InventoryListComponent]
})
export class InventoryModule { }
