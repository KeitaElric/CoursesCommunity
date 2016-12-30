import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todo';
@Injectable()
export class TodoService {
    getTodos(): Todo[] {
        return TODOS;
    };
}