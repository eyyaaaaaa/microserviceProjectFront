import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Order {
  id?: number;
  orderNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [
    { id: 1, orderNumber: 'ORD-001' },
    { id: 2, orderNumber: 'ORD-002' }
  ];

  constructor(private http: HttpClient) { }

  // Pour mocker un backend, on retourne un Observable d'orders
  getOrders(): Observable<Order[]> {
    // Ici tu remplacerais par un vrai appel HTTP GET
    return of(this.orders);
  }

  // Pour ajouter une commande (mock backend)
  addOrder(order: Order): Observable<Order> {
    // Simule l'ajout côté backend avec id auto-incrémenté
    order.id = this.orders.length + 1;
    this.orders.push(order);
    return of(order);

    // Pour vrai backend, faire :
    // return this.http.post<Order>('ton-backend-api/orders', order);
  }
}
