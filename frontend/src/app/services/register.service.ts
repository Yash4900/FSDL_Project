import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly baseurl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  registerUser(user) {
    return this.http.post(`${this.baseurl}/register`, user);
  }

  verifyUser(credentials) {
    return this.http.post(`${this.baseurl}/register/verify`, credentials);
  }

}

