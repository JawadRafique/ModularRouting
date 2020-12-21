import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student.component";


export const studentRoutes: Routes = [
    {
      path: '',
      component: StudentComponent
    }
  ];


@NgModule({
    exports: [StudentComponent],
    declarations: [StudentComponent],
    imports: [
        RouterModule.forChild(studentRoutes)
    ]
  })
  export class StudentModule { }