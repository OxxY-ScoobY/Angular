import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

//@Input() title="Flower"
//@Input() description="this is a description"
@Input() data:any=
{
  title:"flower",
  description: "The flower is beautifull",
  title2:"blue"
}

}
