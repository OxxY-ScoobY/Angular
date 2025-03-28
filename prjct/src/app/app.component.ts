import { Component } from '@angular/core';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { CardsComponent } from "./UI/cards/cards.component";
import { FooterComponent } from "./UI/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { BuisnessComponent } from "./pages/buisness/buisness.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 //title = 'Athil';
 a=10;
 b=20;
 c=this.a+this.b
}
