import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  ToDo: any = ''
  ToDoarray: any = []
  AddToDo() {
    this.ToDoarray.push({ name: this.ToDo, id: this.ToDoarray.length + 1 });
    console.log(this.ToDoarray)
    this.ToDo = ''
  }
  ToDoRemove(id: any) {
    this.ToDoarray = this.ToDoarray.filter((x: any) => id != x.id

    )

  }

}