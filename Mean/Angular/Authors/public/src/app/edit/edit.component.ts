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
  editAuthor:any;
  error:String;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.findToEdit();
    this.editAuthor = { name: "", _id: "" };
  }
  findToEdit(){
    var observable= this.route.params;
    observable.subscribe((res)=>{
      this._httpService.getTask(res.id).subscribe(data => {
        this.data = data['data'];
        this.editAuthor = { name: this.data.name, _id: this.data._id };
      })
    })
  }
  onEdit(){
    let observable = this._httpService.editTask(this.editAuthor);
    observable.subscribe(data => {
      if(data['Message'] == "Error"){
        console.log(data['data']['errors']['name']['message']);
        this.error = data['data']['errors']['name']['message'];
        this.findToEdit();
      }else{
        this.routing.navigate(['/']);
      }
    })
  }
}
