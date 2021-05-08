import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './componets/students/students.component';
import { StudentDetailsComponent } from './componets/student-details/student-details.component';
import { StudentComponent } from './componets/student/student.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsService } from './services/students.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './componets/edit-student/edit-student.component';
import { DeleteStudentComponent } from './componets/delete-student/delete-student.component';
import { AddStudentComponent } from './componets/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentComponent,
    NotFoundComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
