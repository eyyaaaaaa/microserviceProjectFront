import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8081/api/product').subscribe(
      data => this.products = data,
      err => console.error('Erreur lors du chargement des produits', err)
    );
  }

  openReviewDialog(product: any) {
    this.dialog.open(ReviewDialogComponent, {
      width: '400px',
      data: { product }
    });
  }

  goToCreateProduct() {
  this.router.navigate(['product/create']);
}
}
