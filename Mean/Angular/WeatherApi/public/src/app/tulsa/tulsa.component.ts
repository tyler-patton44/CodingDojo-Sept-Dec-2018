import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(y => {
      console.log(y);
      
      var observable=this._httpService.getPath(y[0].path);
      observable.subscribe((x)=>{
        console.log(x);
        this.data=x;
      });
    })
  }

}
