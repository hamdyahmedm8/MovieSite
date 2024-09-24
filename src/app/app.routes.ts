import { Routes } from '@angular/router';
import { HomeComponent } from './tv/home.component';
import { AboutComponent } from './movies/about.component';
import { ContactsComponent } from './TVShow/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {path:'', redirectTo:'app-logIn',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'movieDetails/:id', component:MovieDetailsComponent},
    {path:'app-logIn', component:LogInComponent},
    {path:'register', component:RegisterComponent},
    {path:'errorPage', component:ErrorPageComponent},

    {path:'movieDetails2/:id', redirectTo:'movieDetails/:id',pathMatch:'full'},

    
    
    
    {path:'**',component:ErrorPageComponent}
];
