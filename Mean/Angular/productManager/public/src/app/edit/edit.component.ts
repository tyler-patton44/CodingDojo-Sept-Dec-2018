import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class editComponent implements OnInit {
  data:any;
  editTask:any;
  error_title:String;
  error_price:String;
  error_image:String;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.findToEdit();
    this.editTask = {title: "",price: "",image: ""};
  }
  findToEdit(){
    var observable= this.route.params;
    observable.subscribe((res)=>{
      this._httpService.getTask(res.id).subscribe(data => {
        this.data = data['data'];
        this.editTask = { 
          title: this.data.title,
          price: this.data.price, 
          image: this.data.image , 
          _id: this.data._id };
      })
    })
  }
  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      if(data['Message'] == "Error"){
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
        this.findToEdit();
      }else{
        this.routing.navigate(['/products']);
      }
    })
  }
}
