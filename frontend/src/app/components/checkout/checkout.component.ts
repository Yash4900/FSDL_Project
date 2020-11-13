import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: number;
  
  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe(data => this.cartData = data);
  }

}
