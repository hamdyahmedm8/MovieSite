import { Component } from '@angular/core';
import {MoviesService} from '../movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

moviesData:any=[];
firstPic='';
$imgPrefix='https://image.tmdb.org/t/p/original/';
constructor(public _MoviesService:MoviesService){
  // ------------------------------
_MoviesService.moviesData().subscribe({
next: (data: any) => {this.moviesData=data.results;
  this.firstPic=data.results[1].poster_path;
},
  error: (error: any) => { console.log(error); }})
};

}
