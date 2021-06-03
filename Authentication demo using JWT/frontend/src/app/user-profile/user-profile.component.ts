import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    fullName: '',
    email: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var token = this.userService.getToken();
    this.user.fullName = token.name;
    this.user.email = token.email;;
  }

  logout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('');
  }

}
