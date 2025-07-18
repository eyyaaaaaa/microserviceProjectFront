import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface OrderLineItem {
    id: number;
    skuCode: string;
    price: number;
    quantity: number;
}

export interface Order {
    id: number;
    orderNumber: string;
    orderLineItems: OrderLineItem[];
}

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly apiUrl = 'http://localhost:8082/api/order';

    constructor(private http: HttpClient) { }

    // Pour mocker un backend, on retourne un Observable d'orders
    getOrders() {
        // Ici tu remplacerais par un vrai appel HTTP GET
        return this.http.get<Order[]>(this.apiUrl);
    }

    // Pour ajouter une commande (mock backend)
    /* addOrder(order: Order): Observable<Order> {
         // Simule l'ajout côté backend avec id auto-incrémenté
 
 
         // Pour vrai backend, faire :
         // return this.http.post<Order>('ton-backend-api/orders', order);
     }*/
}
