import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
