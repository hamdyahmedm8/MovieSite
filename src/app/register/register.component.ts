import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  constructor(public _AuthService:AuthService ,public _Router:Router){

  }
registerForm : FormGroup=new FormGroup({
  'first_name' :new FormControl(null,[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
  'last_name' :new FormControl(null,[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
  'age' :new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)]),
  'email' :new FormControl(null,[Validators.required,Validators.email]),
  'password' :new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),

})
formsData:any=[];
err:any;
registerSubmit(formData:any){
  if(formData.valid==true){
  this._AuthService.signUp(formData.value).subscribe({
    next: (data: any) => {
      this.formsData=data;
      this._Router.navigate(['/app-logIn'])
      console.log(this.formsData);
       localStorage.setItem("registerData",JSON.stringify(this.formsData));
    },
    error: (error: any) => {
      
      this.err='mail is already registerd';
      this._Router.navigate(['/errorPage'])
      
    }})
  }
 
  this.formsData = JSON.parse(localStorage.getItem('registerData')!);
}
}
