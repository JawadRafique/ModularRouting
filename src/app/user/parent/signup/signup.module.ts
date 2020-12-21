import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";

export const signUpRoutes: Routes = [
    {
      path: '',
      component: SignupComponent
    }
  ];


@NgModule({
    exports: [SignupComponent],
    declarations: [SignupComponent],
    imports: [
        RouterModule.forChild(signUpRoutes)
    ]
  })
  export class SignupModule { }