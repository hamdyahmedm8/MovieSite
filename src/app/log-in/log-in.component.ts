import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logIn',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgIf,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})

export class LogInComponent {
  constructor(public _AuthService:AuthService ,
    public _Router:Router){

      if(localStorage.getItem('registerData')==null){
        this._Router.navigate(['/register'])
      }
  }
logInForm: FormGroup=new FormGroup({
  'email' :new FormControl(null,[Validators.required,Validators.email]),
  'password' :new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),

})

formsData:any=[];
err:any;
logInSubmit(formData:any){
  if(formData.valid==true){
  this._AuthService.signIn(formData.value).subscribe({
    next: (data: any) => {
      this._Router.navigate(['/home'])
      console.log(data);
    },
    error: (error: any) => {
      this.err='mail is already registerd';
      this._Router.navigate(['/errorPage'])
        }})
      }}}

      
  
    // logInSubmit(formData:any){
//   this._RegisterComponent.registerSubmit(formData);
// console.log(formData);
// }
  // }
  // localStorage.setItem("registerData",JSON.stringify(this.formsData));
  // this.formsData = JSON.parse(localStorage.getItem('registerData')!);
// }

// formsData:any=[];

      // this._Router.navigate(['/home'])
      // this.formsData=JSON.parse(this._RegisterComponent.formsData);