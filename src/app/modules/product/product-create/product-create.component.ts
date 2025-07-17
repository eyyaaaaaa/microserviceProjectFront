import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  product = {
    name: '',
    price: 0,
    description: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

createProduct() {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZMjVMUnpQY09CdGNxem42TG9hU3gxZjNubzRoUm9mR1VqbkNUY0xFSTFBIn0.eyJleHAiOjE3NTI3ODU2ODMsImlhdCI6MTc1Mjc4NTM4MywianRpIjoiNWQ0Y2M4YTctZTZiMS00YmQwLWIyNjctNThkMWY5YjJjMTI1IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL21pY3Jvc2VydmljZXMtcmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMmQ1ZDMwNWQtNGJmMi00NzQ1LThkNmYtMWRlZTg5NTZlYjFlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBpLWdhdGV3YXkiLCJzZXNzaW9uX3N0YXRlIjoiYjZiYzc1ZTEtZDgzZi00MzMzLTlkZGYtZmQyYjQxNjUxZGJhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZXMtcmVhbG0iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImI2YmM3NWUxLWQ4M2YtNDMzMy05ZGRmLWZkMmI0MTY1MWRiYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiYW1hbCBhbWFsIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYW1hbCIsImdpdmVuX25hbWUiOiJhbWFsIiwiZmFtaWx5X25hbWUiOiJhbWFsIiwiZW1haWwiOiJtYXNnaG91bmlhbWFsODRAZ21haWwuY29tIn0.2yZm4VUfCmzNPZFnGUXQiz4G4gN446XWFql15iUhl3AUsh9DYwj4llwF2fAeQ4V-MOHd5d0vh4GPBeMicCOhvAWK1NpQfVggiwK66MQf-bilPmGrv1NQ23KO9Masvt5zQsIseTvskJ_46r7t4tORQDMZRTSIOPP7kOxvn6vTXrDcWT1xKcZC_l0emYL4QFDCGb0NoIBLBpptc1_1ZdOQIJATXdiThGDOKKPJA7hBBEML0ri9Qp5kUCDbcg03la_mF9xIQa5_BfQc_Rr5zM8d0kYLpsA-fCOW-_-dICdao_qoYt6Ft4zW-hqNfLtcOKa57JyhSyf449KOC7EuJp1ggA"

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });

  this.http.post('http://localhost:8081/api/product', this.product, { headers }).subscribe({
    next: () => {
      this.router.navigate(['/product']);
    },
    error: (error) => {
      console.error('Error creating product:', error);
    }
  });
}

}
