import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor() { }
  @Input('studentInfo') student:Student = {
    id:'',
    name:'',
    email:''
  }

  ngOnInit(): void {
  }

}
