import { Component } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  public taskListNoCompleted: any[];
  public taskListCompleted: any[];
  public showInputTask: boolean;
  public errorInput: boolean;
  public showCompleted: boolean;

  constructor() {
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    this.showInputTask = false;
    this.errorInput = false;
    this.showCompleted = true;
  }

  showInputTextTask() {
    this.showInputTask = true;
  }

  addTask(description) {
    if (description) {
      const task: Task = {
      'date': new Date(),
      'description': description,
      'completed': false
      }
      this.taskListNoCompleted.push(task);
      this.errorInput = false;
      this.showInputTask = false;
    } else {
      this.errorInput = true;
    }

  }

  removeTask($event) {
    this.taskListNoCompleted.splice($event, 1);
  }

  completeTask($event) {
    const task = this.taskListNoCompleted[$event];
    task.completed = true;
    task.date = new Date();
    this.taskListNoCompleted.splice($event, 1);
    this.taskListCompleted.push(task);
  }

  showTaskCompleted() {
    this.showCompleted = !this.showCompleted;
  }

}
