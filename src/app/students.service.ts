import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class StudentsService {

  constructor(private http: Http) { }

  getStudents(){
    return this.http.get('http://localhost:3000/api/students')
    .map(res=>res.json())
  }

  createStudent(newStudent){
    var headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/student', JSON.stringify(newStudent), {headers:headers})
    .map(res=>res.json)
  }

  updateStudent(student) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('http://localhost:3000/api/student/' + student._id, JSON.stringify(student), {
        headers: headers
      })
      .map(res => res.json());
  }
  deleteStudent(id) {
    return this.http
      .delete('http://localhost:3000/api/student/' + id)
      .map(res => res.json());
  }

}
