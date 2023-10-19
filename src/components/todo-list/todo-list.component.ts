import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  taskForm: FormGroup;
  tasks: {text: string, completed: boolean}[] = [];

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.taskForm = this.formBuilder.group({
      taskText: ''
    });
  }

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    const taskText = this.taskForm.value.taskText;
    if (taskText.trim() !== '') {
      this.todoService.addTask(taskText);
      this.taskForm.reset();
      this.tasks = this.todoService.getTasks();
    }
  }

  completeTask(index: number) {
    this.todoService.completeTask(index);
    this.tasks = this.todoService.getTasks();
  }
}
