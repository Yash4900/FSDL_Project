import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart data
  private cartData: CartModel = {
    total: 0, // total amount of all products
    data: [{
      product: undefined, // product details
      numInCart: 0 // quantity in cart
    }
    ]
  };

  // we subscribe to this variables in other components so that whenever the data changes the data is also 
  // updated in that components . We use next() method to update data 
  cartTotal$ = new BehaviorSubject<number>(0);
  cartData$ = new BehaviorSubject<CartModel>(this.cartData);

  readonly baseurl = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient, private productService: ProductService) {  }

  addProductToCart(product_id, quantity ?: number) {

    // get product details using product id
    this.productService.getSingleProduct(product_id).subscribe( (prod: ProductModel) => {
      
      if(this.cartData.data[0].product === undefined) { // check if cart is empty
        this.cartData.data[0].numInCart = quantity == undefined ? 1 : quantity;
        this.cartData.data[0].product = prod;
        this.calculateTotal();
        this.cartTotal$.next(this.cartData.total);
        this.cartData$.next(this.cartData);
      }else{ // cart is not empty
        // find index of item in cart . if not in cart returns -1 
        let index = this.cartData.data.findIndex( p => p.product._id == prod._id);
        if(index != -1) { // if already in cart we update quantity
          if(quantity != undefined && quantity <= prod.quantity) {
            this.cartData.data[index].numInCart = this.cartData.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
          }else{
            this.cartData.data[index].numInCart = this.cartData.data[index].numInCart < prod.quantity ? this.cartData.data[0].numInCart+1 : prod.quantity;
          }
        }else{ // if not in cart we push 
          this.cartData.data.push({
            numInCart: 1,
            product: prod
          });
        }
        this.calculateTotal();
        this.cartTotal$.next(this.cartData.total);
        this.cartData$.next(this.cartData);
      }
    });
    
  }

  // update quantity of item in cart 
  updateCartItem(index: number, increase: boolean) {
    let data = this.cartData.data[index];
    if(increase) {
      // we increase quantity only if available quantity is greater than quantity in cart
      data.numInCart < data.product.quantity ? data.numInCart++ : data.product.quantity;
    }else{
      data.numInCart > 0 ? data.numInCart-- : data.numInCart;
    }
    this.calculateTotal();
    this.cartTotal$.next(this.cartData.total);
    this.cartData$.next(this.cartData);
  }

  // delete a product from cart
  deleteProductFromCart(index: number) {
    if(window.confirm("Are you sure you want to delete the item ?")){
      this.cartData.data.splice(index, 1);
      this.calculateTotal();
    }
    if(this.cartData.total == 0) {
      this.cartData = {total: 0, data: [{product: undefined, numInCart: 0}]};
    }
    this.cartTotal$.next(this.cartData.total);
    this.cartData$.next(this.cartData);
    this.showSnackBar("Product deleted from cart");
    // console.log(this.cartData);
  }

  // calculate total amt
  calculateTotal() {
    let total_amt = 0;
    this.cartData.data.forEach(p => {
      total_amt += p.numInCart * p.product.price;
    });
    this.cartData.total = total_amt;
  }

  // subtotal => total cost of 1 product => numInCart * price  
  calculateSubTotal(index: number) {
    let sub_total = 0;
    const p = this.cartData.data[index];
    sub_total = p.product.price * p.numInCart;
    return sub_total;
  }

  // checkout
  checkout(userid) {

    this.http.post(`${this.baseurl}/orders/payment`, null).subscribe((res: {success:boolean})=> { // payment
      if(res.success){
        // place new order
        this.http.post(`${this.baseurl}/orders/new`, {
          userId: userid,
          products: this.cartData.data
        }).subscribe((data: OrderResponse) => {
            if(data.success) {
              const navigationExtras: NavigationExtras = {
                state: {
                  message: data.message,
                  products: this.cartData.data,
                  orderId: data.order_id._id,
                  total: this.cartData.total
                }
              };
              this.router.navigate(['/thankyou'], navigationExtras);
            }
        });
      }else{
        alert('Some error occured!');
      }
    });
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

interface OrderResponse{
  message: string;
  success: boolean;
  order_id: any
};