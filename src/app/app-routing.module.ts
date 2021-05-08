import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './componets/student/student.component';
import { StudentDetailsComponent } from './componets/student-details/student-details.component';
import { StudentsComponent } from './componets/students/students.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';


const routes:Routes=[
  {path: "",component:StudentsComponent},
  {path: "students",component:StudentsComponent},
  {path: "students/:id",component:StudentDetailsComponent},
  {path:"**",component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
