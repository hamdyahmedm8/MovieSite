import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './tv/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './movies/about.component';
import{FormsModule, NgModel} from '@angular/forms';
import { ContactsComponent } from './TVShow/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgOptimizedImage } from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    FormsModule,
    ContactsComponent,
    ProjectsComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    RegisterComponent,
    MovieDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  userName:string="";

}
