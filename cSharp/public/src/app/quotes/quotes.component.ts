import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class quotesComponent implements OnInit {
  data:any;
  vote:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.findQ();
    this.vote = {votes: 0};
  }
  findQ(){
    var observable= this.route.params;
    observable.subscribe((res)=>{
      this._httpService.getTask(res.id).subscribe(data => {
        this.data = data['data'];
        var x = this.sorter(this.data['quotes']);
        this.data['quotes'] = x;
        console.log(this.data);
      })
    })
  }
  onDelete(A_id, Q_id){
      let observable = this._httpService.deleteTask(A_id, Q_id);
      observable.subscribe(data => {
        this.findQ();
      })
  }

  voteUp(id, Q_id){
    this.vote = {votes: 1};
    let observable = this._httpService.updateQuote(id, Q_id, this.vote);
    observable.subscribe(data => {
      this.vote = {votes: 0};
      this.findQ();
    })
  }

  voteDown(id, Q_id){
    this.vote = {votes: -1};
    let observable = this._httpService.updateQuote(id, Q_id, this.vote);
    observable.subscribe(data => {
      console.log(data);
      this.vote = {votes: 0};
      this.findQ();
    })
  }
  sorter(arr){
    for(var i=0; i<arr.length; i++){
      for(var x=0; x<arr.length-i; x++){
        if(arr[x]['votes'] < arr[x+1]['votes']){
          var temp = arr[x];
          arr[x] = arr[x+1];
          arr[x+1] = temp;
        }
      }  
    }
    return arr;
  }
}
