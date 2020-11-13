import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly baseurl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  registerUser(user) {
    console.log(user);
    return this.http.post(`${this.baseurl}/register`, user);
  }
}

// interface User {
//   username: string,
//   password: string,
//   email: string,
//   fname: string,
//   lname: string,
//   age: number
// }