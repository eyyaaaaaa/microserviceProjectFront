import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from '../order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      orderNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.invalid) return;

    const newOrder: Order = {
      orderNumber: this.orderForm.value.orderNumber
    };

    this.orderService.addOrder(newOrder).subscribe(() => {
      this.router.navigate(['/order']);
    });
  }
}
