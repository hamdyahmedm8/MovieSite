import { Routes } from '@angular/router';
import { HomeComponent } from './tv/home.component';
import { AboutComponent } from './movies/about.component';
import { ContactsComponent } from './TVShow/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'**',component:ErrorPageComponent}
];
