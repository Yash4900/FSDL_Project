import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseurl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  registerUser(user) {
    return this.http.post(`${this.baseurl}/auth/register`, user);
  }

  verifyUser(credentials) {
    return this.http.post(`${this.baseurl}/auth/verify`, credentials);
  }

}

