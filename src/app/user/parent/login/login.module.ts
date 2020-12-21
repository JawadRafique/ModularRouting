import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

export const loginRoutes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];


@NgModule({
    exports: [LoginComponent],
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
  })
  export class LoginModule { }