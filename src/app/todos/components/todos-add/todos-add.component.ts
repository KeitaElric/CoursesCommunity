import { Component, EventEmitter, Input, Output } from '@angular/core';
//import './todos.component.scss'
import { Todo } from '../../todo';

@Component({
  selector: 'todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: []
})

export class TodosAddComponent {

  @Input() name: string;
  @Output() onAdded = new EventEmitter<Todo>();

  addedItem: Todo;
  newTodo: string = "";

  addTodo(event: any) {
    this.addedItem = {
      content: this.newTodo,
      isCompleted: false
    }

    this.onAdded.emit(this.addedItem);
    this.newTodo = '';
    event.preventDefault();
  }
}

