import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tvData:any=[];
  firstPic='';
  $imgPrefix='https://image.tmdb.org/t/p/original/';
  constructor(public _MoviesService:MoviesService){
    // ------------------------------
_MoviesService.getData().subscribe({
  next: (data: any) => {this.tvData=data.results;
    this.firstPic=data.results[1].poster_path;
  },
    error: (error: any) => { console.log(error); }})
};

}