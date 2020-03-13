import { ArticlePageComponent } from './article-page/article-page.component';
import { DishBrandsComponent } from './dish-brands/dish-brands.component';
import { ProductComponent } from './product/product.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';


const routes: Routes = [

  { path: 'product', component: ProductComponent },
  { path: 'brands', component: DishBrandsComponent },
  {
    path: 'body', component: BodyComponent, children:
      [
        { path: 'recipes', component: RecipesComponent }
      ]

  },
  { path: 'recipes-page', component: RecipesPageComponent},
  { path: 'article-page', component: ArticlePageComponent},
  { path: 'recipe-page', component: RecipePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
