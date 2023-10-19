import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: {text: string, completed: boolean}[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(taskText: string) {
    this.tasks.push({ text: taskText, completed: false });
  }

  completeTask(index: number) {
    this.tasks[index].completed = true;
  }
}
