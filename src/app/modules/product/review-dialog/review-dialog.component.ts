import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent {
  reviewText: string = '';

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submitReview() {
    console.log('Review:', this.reviewText, 'for product:', this.data.product);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
