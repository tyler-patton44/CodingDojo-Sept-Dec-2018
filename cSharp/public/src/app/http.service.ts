import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data={};
  constructor(private _http: HttpClient) {
  }
  getTasks(){
    return this._http.get('/tasks');   
 }
  getTask(task_id){
    return this._http.get('/tasks/'+task_id);
  }
  addTask(newtask){
  return this._http.post('/createtasks', newtask);
  }
  editTask(edittask){
  return this._http.put('/update/'+edittask._id, edittask);
  }
  addQuote(id, newtask){
    return this._http.post('/createQuote/'+id, newtask);
  }
  updateQuote(id, Q_id, newVote){
    return this._http.put('/vote/'+id+'/'+Q_id, newVote);
    }
  deleteTask(A_id, Q_id){
  return this._http.delete('/delete/'+A_id+'/'+Q_id);
  }
}