import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {
    
  }
  getData():Observable<any>{
    
 return    this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=9e265554f3315b127b1a5d684bb8d104');

   }
   moviesData():Observable<any>
   {
return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=9e265554f3315b127b1a5d684bb8d104');
   }
   TVShowData():Observable<any>
   {
return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=9e265554f3315b127b1a5d684bb8d104');
   }
   movieDetails(id:any):Observable<any>
   {
return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9e265554f3315b127b1a5d684bb8d104`);
   }
}
