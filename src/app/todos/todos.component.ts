import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todos.service';

@Component({
  selector: 'todos-page',
  templateUrl: './todos.component.html',
  styles: [require('./todos.component.scss')],
  providers: [TodoService]
})

export class TodosComponent {
  todos: Todo[];
  constructor(private todoService: TodoService) {
      this.todos = this.todoService.getTodos();
  }

  onAdded(addedItem: Todo) {
    this.todos.push(addedItem);
  }
}
