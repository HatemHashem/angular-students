import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit,OnDestroy {
sub:any;
students:Student[]=[];
searchValue:any = "";
  constructor(private studentService:StudentsService) {
    
   }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub=this.studentService.getStudents().subscribe({
      next:(data)=>{
        this.students=data as Student[];
        console.log(this.students);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  search(event:Event){
    this.sub = this.studentService.getStudents()
    .subscribe({
      next:(response)=>{
        let studentsArray:Student[] = response as Student[];
        if(studentsArray.length>0){
          this.students = studentsArray.filter((element:Student)=>{
            return element.name.toLowerCase().includes(this.searchValue.toLowerCase());
          });
        }
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
  }

}
