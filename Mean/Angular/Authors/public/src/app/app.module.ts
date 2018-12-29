import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
import { AppRoutingModule } from './app-routing.module';
import { newComponent } from './new/new.component';
import { homeComponent } from './home/home.component';
import { editComponent } from './edit/edit.component';
import { quotesComponent } from './quotes/quotes.component';
import { newQuotesComponent } from './newQuotes/newQuotes.component';

@NgModule({
  declarations: [AppComponent, newComponent, homeComponent, editComponent, quotesComponent, newQuotesComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,
    FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }