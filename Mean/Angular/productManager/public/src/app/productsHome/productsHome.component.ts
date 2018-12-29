import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './productsHome.component.html',
  styleUrls: ['./productsHome.component.css']
})
export class productsHomeComponent implements OnInit {
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
  }
}
