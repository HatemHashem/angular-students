import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly baseUrl = 'http://localhost:3000/students';
  constructor(private myClient: HttpClient) {
    console.log('hi from service');
  }
  getStudents() {
    return this.myClient.get(this.baseUrl);
  }
  getStudentById(id: string) {
    return this.myClient.get(this.baseUrl+ "/"+ + id);
  }
  addStudent(data: {}) {
    return this.myClient.post(this.baseUrl, data);
  }
  public deleteStudent(id: string) {
    return this.myClient.delete(this.baseUrl+"/" + id);
  }

  updateStudent(student:Student) {
    return this.myClient.put(this.baseUrl + "/"+student.id,student);
  }
}
