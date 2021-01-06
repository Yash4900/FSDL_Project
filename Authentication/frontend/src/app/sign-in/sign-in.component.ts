import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    this.userService.loginUser(form.value).subscribe(
      (res)=>{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/user');
      },
      (err)=>{
        this.showSnackBar(err.error);
      }
    );
  }

  showSnackBar(message: string) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
