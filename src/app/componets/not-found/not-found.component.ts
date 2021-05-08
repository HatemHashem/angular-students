import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor(studentService:StudentsService) {
    
   }

  ngOnInit(): void {
  }

}
