import { Component } from '@angular/core';
import {MoviesService} from '../movies.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movieDetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  test:boolean=false;
  moviesDetails:any;
  topTen:any=[];
  id:any;
  $imgPrefix='https://image.tmdb.org/t/p/original/';
constructor(public _MoviesService:MoviesService,public _ActivatedRoute:ActivatedRoute){
  this.id = _ActivatedRoute.snapshot.paramMap.get('id');
  _MoviesService.movieDetails(this.id).subscribe({
    next: (data: any) => {
      this.moviesDetails=data;
    },
    error: (error: any) => { console.log(error); }})
    // --------------===================
    _MoviesService.moviesData().subscribe({
      next: (data: any) => {
        
        for(let i=0;i<10;i++){
          this.topTen.push(data.results[i]);
        }
        this.test=true;
      },
      error: (error: any) => { console.log(error); }})
}
// --------------------------------------------------

}
