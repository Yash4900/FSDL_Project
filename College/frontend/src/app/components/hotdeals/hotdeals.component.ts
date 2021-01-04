import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.scss']
})
export class HotdealsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

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
    this.showSnackBar("Product added to your cart");
  }

  selectProduct(id) {
    this.router.navigate(['/product', id]).then();
  }

  showSnackBar(message: string) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
