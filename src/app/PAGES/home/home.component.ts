import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { CarouselComponent } from "../../UI/carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
