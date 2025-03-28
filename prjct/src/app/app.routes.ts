import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuisnessComponent } from './pages/buisness/buisness.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'home',
component:HomeComponent},

{path:'buisness',
    component:BuisnessComponent
},
{
    path:'contact',
    component:ContactComponent
}
];

