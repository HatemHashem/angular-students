import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input("studentInfo") student: Student = {
    id: "",
    name: "",
    email: "",
  };
  sub:any;


  constructor(private myService: StudentsService) { }

  ngOnInit(): void {
  }
  updateStudent(myForm: any) {
    this.sub = this.myService.updateStudent(this.student).subscribe({
      next: () => {
        this.sub.unsubscribe();},
      error: (err) => {
        console.log(err);
      },
    });
  }

}
