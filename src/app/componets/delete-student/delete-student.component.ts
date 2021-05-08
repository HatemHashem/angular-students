import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

 
  id:string="";
  sub:any;

  constructor(private myService:StudentsService, activeRoute:ActivatedRoute, private router: Router) {
    this.id = activeRoute.snapshot.params.id 
  }

  ngOnInit(): void {
  }

  deleteStudent(){
    this.sub = this.myService.deleteStudent(this.id).subscribe({
      next: ()=>{
        this.sub.unsubscribe();
        this.router.navigateByUrl("");
      }
    });
  }

}
