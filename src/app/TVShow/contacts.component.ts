import { Component } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  tvShowData:any=[];
  firstPic='';
  $imgPrefix='https://image.tmdb.org/t/p/original/';
  constructor(public _MoviesService:MoviesService){
    // ------------------------------
  _MoviesService.moviesData().subscribe({
  next: (data: any) => {this.tvShowData=data.results;
    this.firstPic=data.results[1].poster_path;
  },
    error: (error: any) => { console.log(error); }})
  };
}
