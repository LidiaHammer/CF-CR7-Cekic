import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelsComponent } from './travels/travels.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path: "blog",component: BlogComponent
  },
  {
    path: "travels",component: TravelsComponent
  },
  {
    path: "travelOffers/:offersId",component: TravelDetailsComponent
  },{
    path: 'cart', component: CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
