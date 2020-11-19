import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = [];
  category: string = '';
  selected: string;
  count = 0;
  slides = [
    { img: "/assets/img/c2.JPG" },
    { img: "/assets/img/c3.JPG" },
    { img: "/assets/img/cr1.JPG" }
  ];


  constructor(private productService: ProductService, private router: Router, private cartService: CartService) {
  }


  ngOnInit(): void {
    this.selected = this.slides[this.count].img;
    this.productService.getAllProducts().subscribe((prods: { count: number, products: ProductModel[] }) => {
      this.products = prods.products;
    });
  }


  next(): void {
    this.count = (this.count + 1) % 3;
    this.selected = this.slides[this.count].img;
  }
  prev(): void {
    // alert(this.count);
    this.count = (this.count - 1) % 3;
    this.selected = this.slides[this.count].img;
  }

  changeCategory(): void {
    if (this.category == 'All') {
      this.productService.getAllProducts().subscribe((prods: { count: number, products: ProductModel[] }) => {
        this.products = prods.products;
      });
    } else {
      this.productService.getProductsOfCategory(this.category).subscribe((prods: { count: number, products: ProductModel[] }) => {
        this.products = prods.products;
      });
    }
  }

  selectProduct(id) {
    this.router.navigate(['/product', id]).then();
  }

  addToCart(id): void {
    this.cartService.addProductToCart(id);
    this.showSnackBar("Product added to your cart");
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
