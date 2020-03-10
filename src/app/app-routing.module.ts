import { ProductComponent } from './product/product.component';
import { TheFirstPageComponent } from './the-first-page/the-first-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'the-first-page', component: TheFirstPageComponent},
  { path: 'product', component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
