import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'meals',
    component: MealsComponent
  },
  {
    path: 'fooditems',
    component: FoodItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
