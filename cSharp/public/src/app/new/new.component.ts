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
  error:String;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.newTask = {name: ""};
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      if(data['Message'] == "Error"){
        this.error = data['data']['errors']['name']['message'];
      }else{
        this.newTask = {name: ""};
        this.routing.navigate(['/']);
      }
    })
  }
}
