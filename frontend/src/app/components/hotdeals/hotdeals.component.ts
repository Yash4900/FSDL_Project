import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.scss']
})
export class HotdealsComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }

  products: ProductModel[] = [];

  slides = [
    { img: "/assets/img/c2.JPG" },
    { img: "/assets/img/c3.JPG" },
    { img: "/assets/img/cr1.JPG" },
    // {img: "/assets/img/c2.JPG"}}
  ];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: { count: number, products: ProductModel[] }) => {
      this.products = prods.products;
    });

  }
  addToCart(id): void {
    this.cartService.addProductToCart(id);
  }

}
