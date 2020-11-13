import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }
  
  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.registerService.registerUser(form.value).subscribe((res: { uid: string,message: string}) => {
      alert(res.message+"\nUser Id: "+res.uid);
    });
  }
}
