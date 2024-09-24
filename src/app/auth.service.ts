import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient:HttpClient) { }
  signUp(data:any):Observable<any>
  {
    return   this._HttpClient.post('https://reqres.in/api/users',data);
  }
  signIn(data:any):Observable<any>
  {
    // return   this._HttpClient.post('https://api.themoviedb.org/3/trending/movie/week?api_key=9e265554f3315b127b1a5d684bb8d104',data);
    return   this._HttpClient.post('https://fakestoreapi.com/users',data);

  }
}  

// ----------------------------------------------------
  // return   this._HttpClient.post('https://api.themoviedb.org/3/authentication/session/new',data);

   // return   this._HttpClient.post('https://fakestoreapi.com/users',data);

// JSON.stringify()
    // return    this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data);
