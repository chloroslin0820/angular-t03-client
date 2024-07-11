import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../../../types';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) {}

  @ViewChild('deleteButton') deleteButton: any;

  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        console.log('Product deleted request confirmed');
        this.deleteProduct();
      }
    });
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }

  ngOnInit() {
  }
}
