import { homeComponent } from './home/home.component';
import { productsHomeComponent } from './productsHome/productsHome.component';
import { productsComponent } from './products/products.component';
import { newComponent } from './new/new.component';
import { editComponent } from './edit/edit.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '',component: homeComponent },
  { path: 'products', component: productsHomeComponent, children: [
    { path: '',component: productsComponent },
    { path: 'new',component: newComponent },
    { path: 'edit/:id',component: editComponent }]
  },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }