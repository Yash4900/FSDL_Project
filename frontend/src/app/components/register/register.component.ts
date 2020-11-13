import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.authService.registerUser(form.value).subscribe((res: { message: string}) => {
      alert(res.message);
    });
  }
}
