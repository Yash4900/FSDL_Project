import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly baseurl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  // get all products 
  getAllProducts() {
    return this.http.get(this.baseurl+'/products');
  }

  // get single product
  getSingleProduct(prod_id) {
    return this.http.get(this.baseurl+'/products/'+prod_id);
  }

  // get products of a category
  getProductsOfCategory(category_name: string) {
    return this.http.get(this.baseurl+'/products/category/'+category_name);
  }
}
