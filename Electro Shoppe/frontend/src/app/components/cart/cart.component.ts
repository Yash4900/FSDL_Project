import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData: CartModel;
  cartTotal: number;
  cartSubTotal: number;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe(data => this.cartData = data);
  }

  // update product quantity
  updateQuantity(index: number, action: string) {
    this.cartService.updateCartItem(index, action=='increase'?true:false);
  }

}
