import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly baseurl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  // get all products 
  getAllProducts(limitOfResults = 10) {
    return this.http.get(this.baseurl+'/products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  // get single product
  getSingleProduct(id) {
    return this.http.get<ProductModel>(this.baseurl+'/products/'+id);
  }

  // get products of a category
  getProductsOfCategory(category_name: string) {
    return this.http.get(this.baseurl+'/products/category/'+category_name);
  }
}
