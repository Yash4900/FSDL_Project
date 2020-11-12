import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = [];

  constructor( private productService: ProductService, private router: Router , private cartService: CartService) { }

  ngOnInit(): void {
    
  	this.productService.getAllProducts().subscribe( (prods: { count: Number, products: any[] }) => {
  	  this.products = prods.products;
  	});

  }

  selectProduct(id) {
    this.router.navigate(['/product', id]).then();
  }

  addToCart(id) {
    this.cartService.addProductToCart(id);
  }
}