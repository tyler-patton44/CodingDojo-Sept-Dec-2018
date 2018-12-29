import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class newComponent implements OnInit {
  data:any;
  newTask:any;
  error_title:String;
  error_price:String;
  error_image:String;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.newTask = {title: "",price: "",image: ""};
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      if(data['Message'] == "Error"){
        console.log(data['data']['errors']);
        if(data['data']['errors']['title']){
          this.error_title = data['data']['errors']['title']['message'];
        }else{
          this.error_title = "";
        }
        if(data['data']['errors']['price']){
          this.error_price = data['data']['errors']['price']['message'];
        }else{
          this.error_price = "";
        }
        if(data['data']['errors']['image']){
          this.error_image = data['data']['errors']['image']['message'];
        }else{
          this.error_image = "";
        }
        console.log(this.newTask);
      }else{
        this.newTask = {title: "",price: "",image: ""};
        this.routing.navigate(['/products']);
      }
    })
  }
}
