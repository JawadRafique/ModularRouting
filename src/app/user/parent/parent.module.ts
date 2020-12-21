import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { parentRoutes } from './parent.routing';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(parentRoutes)
  ]
})
export class ParentModule { }
