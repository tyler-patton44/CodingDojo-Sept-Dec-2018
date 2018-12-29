import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  newTask:any;
  editTask:any;
  showForm = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.newTask = {name: "", animal: ""};
    this.editTask = {name: "", animal: ""};
    this.tasksOnClick();
  }

  tasksOnClick() {
    this._httpService.getTasks().subscribe(info => {
      this.tasks = info['data'];
      console.log("Got our tasks!", this.tasks);
    })
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {name: "", animal: ""}
      this.tasksOnClick();
    })
  }

  onEdit(task){
    this.showForm = true;
    console.log(task);
    this.editTask = task;
    this.showForm = true;
  }
  onEditForm(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.editTask = {name: "", animal: ""};
      this.tasksOnClick();
    })
    this.showForm = false;
  }
  onDelete(task){
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data => {
      this.tasksOnClick();
    })
  }
}
