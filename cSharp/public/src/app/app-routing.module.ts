import { newComponent } from './new/new.component';
import { homeComponent } from './home/home.component';
import { editComponent } from './edit/edit.component';
import { quotesComponent } from './quotes/quotes.component';
import { newQuotesComponent } from './newQuotes/newQuotes.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '',component: homeComponent },
  { path: 'new',component: newComponent },
  { path: 'edit/:id',component: editComponent },
  { path: 'quotes/:id',component: quotesComponent },
  { path: 'newQuote/:id',component: newQuotesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }