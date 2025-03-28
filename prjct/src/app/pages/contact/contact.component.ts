import { Component } from '@angular/core';
import { FooterComponent } from '../../UI/footer/footer.component';
import { CardsComponent } from '../../UI/cards/cards.component';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent,CardsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data={
    title:"beauty",
    description:"Its Nice"
  }

}
