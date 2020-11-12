import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CartModelServer } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
import { OrderService } from './order.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartData: CartModelServer = {
    total: 0,
    data: [{
      product: undefined,
      numInCart: 0
    }
    ]
  };

  readonly baseurl = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient, private productService: ProductService, private orderService: OrderService) {  }

  addProductToCart(product_id, quantity ?: number) {
    this.productService.getSingleProduct(product_id).subscribe( (prod: ProductModel) => {
      
      if(this.cartData.data[0].product === undefined) {
        this.cartData.data[0].numInCart = quantity == undefined ? 1 : quantity;
        this.cartData.data[0].product = prod;
        this.calculateTotal();
      }else{
        let index = this.cartData.data.findIndex( p => p.product._id == prod._id);
        alert(index);
        if(index != -1) {
          if(quantity != undefined && quantity <= prod.quantity) {
            this.cartData.data[index].numInCart = this.cartData.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
          }else{
            this.cartData.data[index].numInCart = this.cartData.data[index].numInCart < prod.quantity ? this.cartData.data[0].numInCart+1 : prod.quantity;
          }
          alert(this.cartData.data[index].numInCart);
        }else{
          this.cartData.data.push({
            numInCart: 1,
            product: prod
          });
        }
        this.calculateTotal();
      }
    });
    console.log(this.cartData);
  }

  updateCartItem(index: number, increase: boolean) {
    let data = this.cartData.data[index];
    if(increase) {
      data.numInCart < data.product.quantity ? data.numInCart++ : data.product.quantity;
    }else{
      data.numInCart--;
    }
    this.calculateTotal();
    console.log(this.cartData);
  }

  deleteProductFromCart(index: number) {1
    if(window.confirm("Are you sure you want to delete the item ?")){
      this.cartData.data.splice(index, 1);
    }
    if(this.cartData.total == 0) {
      this.cartData = {total: 0, data: [{product: undefined, numInCart: 0}]};
    }
    this.calculateTotal();
    console.log(this.cartData);
  }

  calculateTotal() {
    let total_amt = 0;
    this.cartData.data.forEach(p => {
      total_amt += p.numInCart * p.product.price;
    });
    this.cartData.total = total_amt;
  }

  resetServerData() {
    this.cartData = {
      total: 0,
      data: [{
        product: undefined,
        numInCart: 0
      }
      ]
    };
  }

  checkout(userId) {
    this.http.post(`${this.baseurl}/orders/payment`, null).subscribe((res: Response)=> {
      if(res.success==true){
        this.resetServerData();
        this.http.post('${this.baseurl}/orders/new', {
          userId: userId,
          products: this.cartData.data
        }).subscribe((data: OrderResponse) => {
          this.orderService.getSingleOrder(data.order_id).then(prods => {
            if(data.success) {
              const navigationExtras: NavigationExtras = {
                state: {
                  message: data.message,
                  products: prods,
                  orderId: data.order_id,
                  total: this.cartData.total
                }
              };
              this.router.navigate(['/thankyou'], navigationExtras);
            }
          });
        });
      }else{
        alert('Some error occured!');
      }
    });
  }
}


interface OrderResponse{
  message: string;
  success: boolean;
  order_id: any;
  products: [{
    id: string;
    numInCart: string;
  }]
};

interface Response{
  success: boolean
}