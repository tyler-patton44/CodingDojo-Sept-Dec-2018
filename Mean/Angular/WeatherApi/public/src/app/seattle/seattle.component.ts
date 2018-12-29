import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
  var observable=this._httpService.getPath(this.route.url._value[0].path);
  observable.subscribe((x)=>{
    this.data=x;
  });
  }

}
