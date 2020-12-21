import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleParent: string= "Parent Component";
  titleStudent: string= "Student Component";
  titleTeacher: string= "Teacher Component";
  
  constructor(private msg: MessageService){
  }

  message (title) {
    this.msg.message(title)
  }

  title = 'ModularRouting';
}
