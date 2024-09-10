import { Component } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isAdmin = true;
  users=["hamdy ",31,"5000","male"];
  newUsers:any=[];
constructor(_UsersService:UsersService){
 this.newUsers=_UsersService.ingredientList ;
}
}
