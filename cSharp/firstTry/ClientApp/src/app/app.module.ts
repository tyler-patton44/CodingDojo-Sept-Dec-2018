import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
import { AppRoutingModule } from './app-routing.module';
import { homeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, homeComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,
    FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }