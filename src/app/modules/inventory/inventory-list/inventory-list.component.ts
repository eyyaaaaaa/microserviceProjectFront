import { Component, OnInit } from '@angular/core';
import { InventoryModel } from '../model/inventory-model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventories: InventoryModel[] = [];
  newInventory: InventoryModel = { id: 0, skuCode: '', stock: 0 };
  showCreateForm = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadInventories();
  }

  loadInventories(): void {
    this.inventoryService.getInventories().subscribe({
      next: (data) => this.inventories = data,
      error: (err) => console.error('Failed to load inventories', err)
    });
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  createInventory() {
    if (this.newInventory.skuCode.trim() && this.newInventory.stock >= 0) {
      this.inventoryService.createInventory(this.newInventory).subscribe({
        next: (createdInventory) => {
          this.inventories.push(createdInventory);
          this.newInventory = { id: 0, skuCode: '', stock: 0 };
          this.showCreateForm = false;
        },
        error: (err) => {
          console.error('Failed to create inventory', err);
          alert('Failed to create inventory');
        }
      });
    } else {
      alert('Please fill in valid SKU code and stock');
    }
  }
}
