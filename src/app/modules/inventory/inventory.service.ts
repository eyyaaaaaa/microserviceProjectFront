import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryModel } from './model/inventory-model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:8084/api/inventory';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getInventories(): Observable<InventoryModel[]> {
    return this.http.get<InventoryModel[]>(this.apiUrl);
  }

  createInventory(inventory: InventoryModel): Observable<InventoryModel> {
    return this.http.post<InventoryModel>(this.apiUrl, inventory);
  }
}
