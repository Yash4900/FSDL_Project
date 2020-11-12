import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly baseurl = 'http://localhost:3000';
  products: ProductResponseModel[] = []

  constructor(private http: HttpClient) { }

  getSingleOrder(orderId) {
    return this.http.get<ProductResponseModel[]>(this.baseurl+'/orders/'+orderId).toPromise();
  }
}

interface ProductResponseModel {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
