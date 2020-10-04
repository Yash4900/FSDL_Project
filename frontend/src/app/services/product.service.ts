import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly baseurl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  // get all products from the backend
  getAllProducts(limitOfResults = 10) {
    return this.http.get(this.baseurl+'/products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }
}
