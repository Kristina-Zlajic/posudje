import { DishBrandsComponent } from './dish-brands/dish-brands.component';
import { ProductComponent } from './product/product.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [

  { path: 'product', component: ProductComponent },
  { path: 'brands', component: DishBrandsComponent },
  {
    path: 'body', component: BodyComponent, children:
      [
        { path: 'recipes', component: RecipesComponent }
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
