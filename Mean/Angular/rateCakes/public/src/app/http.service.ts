import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
       return this._http.get('/tasks');   
    }
  getTask(task_id){
      return this._http.get('/tasks/'+task_id);
    }
  addTask(newtask){
    return this._http.post('/createtasks', newtask);
  }
  addCom(id, newtask){
    return this._http.post('/createCom/'+id, newtask);
  }
  deleteTask(id){
    return this._http.delete('/delete/'+id);
  }
}
