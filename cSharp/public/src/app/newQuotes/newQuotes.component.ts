import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './newQuotes.component.html',
  styleUrls: ['./newQuotes.component.css']
})
export class newQuotesComponent implements OnInit {
  data:any;
  newQ:any;
  error:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.findQ2();
    this.newQ = {content: "", votes: 0};
  }
  findQ2(){
    var observable= this.route.params;
    observable.subscribe((res)=>{
      this._httpService.getTask(res.id).subscribe(data => {
        this.data = data['data'];
      })
    })
  }
  onSubmit2(){
    let observable = this._httpService.addQuote(this.data._id, this.newQ);
    observable.subscribe(data => {
      
      if(data['Message'] == "Error"){
        this.error = data['data']['errors']['content']['message'];
        console.log(this.error);
      }else{
        this.newQ = {content: "", votes: 0};
        this.routing.navigate(['quotes/'+this.data._id]);
      }
    })
  }
}
