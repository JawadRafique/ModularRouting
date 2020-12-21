import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
