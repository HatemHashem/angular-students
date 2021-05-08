import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private myService: StudentsService, private router: Router) {}

  id: any = '';
  name: string = '';
  email: string = '';
  subscriber: any;
  formWithId: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  addStudent(myForm: any) {
    this.subscriber = this.myService.getStudents().subscribe({
      next: (response) => {
        let students: Student[] = response as Student[];
        if (students.length === 0) {
          this.id = 1;
        } else {
          this.id = students[students.length - 1].id + 1;
        }
        let formWithId = { ...{ id: this.id }, ...myForm.form.value };
        this.subscriber = this.myService.addStudent(formWithId).subscribe({
          next: () => {},
        });

        this.name = '';
        this.email = '';
        this.id = '';
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
