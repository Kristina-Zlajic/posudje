import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { DishBrandsComponent } from './dish-brands/dish-brands.component';
import { BodyComponent } from './body/body.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    DishBrandsComponent,
    BodyComponent,
    RecipesComponent,
    RecipesPageComponent,
    ArticlePageComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
