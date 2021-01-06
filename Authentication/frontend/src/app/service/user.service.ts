import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseurl = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  registerUser(user: User) {
    return this.http.post(`${this.baseurl}/register`, user);
  }

  loginUser(credentials) {
    return this.http.post(`${this.baseurl}/login`, credentials);
  }

  setToken(token: string) {
    localStorage.setItem('token',token);
  }

  getToken() {
    var token = localStorage.getItem('token');
    if(token!=null){
      var payload = atob(token.split('.')[1]);
      return JSON.parse(payload);
    }else{
      return null;
    }
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    if(this.getToken()==null){
      return false;
    }else{
      var token = this.getToken();
      return (token.exp>Date.now()/1000);
    }
  }
}
