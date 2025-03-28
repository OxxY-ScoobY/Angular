import { Component } from '@angular/core';
import { CardsComponent } from "../../UI/cards/cards.component";
import { NavbarComponent } from '../../UI/navbar/navbar.component';

@Component({
  selector: 'app-buisness',
  imports: [CardsComponent],
  templateUrl: './buisness.component.html',
  styleUrl: './buisness.component.scss'
})
export class BuisnessComponent {
  data= {
    title:"rose",
    description:"Very beautiful rose",
  }

}
