import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  task:string[];
  doneTasks: number[];

  constructor() {}
  ngOnInit(): void {
    this.task = [];
    this.doneTasks = [];
  }

  delete(index: number) {
    this.task.splice(index, 1);
    this.doneTasks = this.doneTasks.filter(i => i !== index);
  }

  done(index: number) {
    if (this.doneTasks.includes(index)) {
      this.doneTasks = this.doneTasks.filter(i => i !== index);
    } else {
      this.doneTasks.push(index);
    }
  }

  add(item:string) {
    this.task.unshift(item)
    return false
  }
}
