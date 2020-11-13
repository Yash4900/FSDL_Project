import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'mg-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  message: String;
  orderId;
  products;
  cartTotal;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      message: String,
      products: any,
      orderId: any,
      total: number
    };

    this.message = state.message;
    this.orderId = state.orderId.toString();
    this.products = state.products;
    this.cartTotal = state.total;
    console.log(this.products);
  }

  ngOnInit() {

  }

}

// interface ProductResponseModel {
//   id: Number;
//   title: String;
//   description: String;
//   price: Number;
//   quantityOrdered: Number;
//   image: String;
// }