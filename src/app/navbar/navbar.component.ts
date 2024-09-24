import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
