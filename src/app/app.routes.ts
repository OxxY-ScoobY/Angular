import { Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { ProductviewComponent } from './PAGES/productview/productview.component';

export const routes: Routes = [

    {
        path: 'home',component:HomeComponent
    },
    {
        path: 'products',component:ProductsComponent
    },
    {
        path: 'contact',component:ContactComponent
    },
    {
        path: 'productview/:id',component:ProductviewComponent
    }

];
