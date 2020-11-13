import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModel} from "../../models/cart.model";
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModel;
  cartTotal: Number;
  checkoutForm: any;
  constructor(private cartService: CartService, private authService: AuthService) {
  }

  ngOnInit() {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

  }

  onSubmit(form: NgForm) {
    // we check whether user is registered user
    this.authService.verifyUser(form.value).subscribe((res: {uid , success:boolean}) => {
      if(res.success){ // if registered user then checkout
        this.cartService.checkout(res.uid);
      }else{
        alert("Enter valid credentials!");
      }
    });
  };

}