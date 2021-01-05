import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseurl = 'http://localhost:3000/api';

  // selectedUser: User = {
  //   fullName: '',
  //   email: '',
  //   password: ''
  // }

  constructor(private http:HttpClient) { }

  registerUser(user: User) {
    return this.http.post(`${this.baseurl}/register`, user);
  }

  loginUser(credentials) {
    return this.http.post(`${this.baseurl}/login`, credentials);
  }
}
