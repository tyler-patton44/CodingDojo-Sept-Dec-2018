import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  task:any;
  newTask:any;
  taskCom:any;
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.newTask = {baker: "", image: ""};
    this.taskCom = {ratings: 0, comment: ""};
    this.tasksOnClick();
  }

  tasksOnClick() {
    this._httpService.getTasks().subscribe(info => {
      this.tasks = info['data'];
      console.log("Got our tasks!", this.tasks);
    })
  }
  oneTask(id) {
    this._httpService.getTask(id).subscribe(info => {
      this.task = info['data'];
      var sum = 0;
      for(let x=0; x<this.task.comments.length; x++){
        console.log(this.task.comments[x].ratings);
        sum += this.task.comments[x].ratings;
      }
      this.task.average = sum/this.task.comments.length;
      console.log(this.task.average)
    })
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {baker: "", image: ""};
      this.tasksOnClick();
    })
  }
  onDelete(task){
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data => {
      this.tasksOnClick();
    })
  }

  comSubmit(id){
    let observable = this._httpService.addCom(id, this.taskCom);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.taskCom = {ratings: 0, comment: ""};
      this.oneTask(id);
    })
  }
}
