import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../core/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll('').subscribe(
      res => {
        if (res.success) {
          this.products = res['products'];
        }
      },
      error => this.toastr.error(error, 'Products Error')
    );
  }
}
