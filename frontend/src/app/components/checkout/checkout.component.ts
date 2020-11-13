import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'mg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: Number;
  checkoutForm: any;
  constructor(private cartService: CartService, private registerService: RegisterService) {
  }

  ngOnInit() {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

  }

  onSubmit(form: NgForm) {
    this.registerService.verifyUser(form.value).subscribe((res: {uid , success:boolean}) => {
      if(res.success){
        this.cartService.checkout(res.uid);
      }else{
        alert("Enter valid credentials!");
      }
    });
  };

}