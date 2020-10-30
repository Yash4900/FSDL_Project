import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() newTask: string;

  tasks: any = [];

  addNewTask(taskName: string) {
    var obj = {
      name: taskName,
      isComplete: false
    }
    this.tasks.push(obj);
  }

  deleteTask(selectedTask: any) {
    this.tasks = this.tasks.filter((task) => selectedTask.name != task.name);
  }

  toggleComplete(selectedTask: any) {
    var index = this.tasks.indexOf(selectedTask);
    this.tasks[index] = {
      name: selectedTask.name,
      isComplete: !selectedTask.isComplete
    }
  }
}
