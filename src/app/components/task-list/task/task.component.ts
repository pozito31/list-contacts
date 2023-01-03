import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  @Output() remove: EventEmitter<number>;
  @Output() complete: EventEmitter<number>;

  constructor() {
    this.remove = new EventEmitter<number>();
    this.complete = new EventEmitter<number>();
  }

  ngOnInit() {

  }

  taskCheckedEvent() {
    this.complete.emit(this.index);
  }

  removeEvent() {
    this.remove.emit(this.index);
  }

}
