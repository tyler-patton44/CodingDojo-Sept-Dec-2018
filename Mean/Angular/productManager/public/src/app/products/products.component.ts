import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class productsComponent implements OnInit {
  tasks = [];
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit() {
    this.tasksOnClick();
  }
  tasksOnClick() {
    this._httpService.getTasks().subscribe(info => {
      this.tasks = info['data'];
      console.log("Got our tasks!", this.tasks);
    })
  }
  onDelete(task){
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data => {
      this.tasksOnClick();
    })
  }
}
