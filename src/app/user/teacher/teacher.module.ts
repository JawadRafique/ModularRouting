import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeacherComponent } from "./teacher.component";


export const teacherRoutes: Routes = [
    {
      path: '',
      component: TeacherComponent
    }
  ];


@NgModule({
    exports: [TeacherComponent],
    declarations: [TeacherComponent],
    imports: [
        RouterModule.forChild(teacherRoutes)
    ]
  })
  export class TeacherModule { }