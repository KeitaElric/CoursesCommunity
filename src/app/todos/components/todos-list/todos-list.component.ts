import { Component, Input } from '@angular/core';
//import './todos.component.scss'

import { Todo } from '../../todo';

@Component({
    selector: 'todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: [],
    
})

export class TodosListComponent {
    @Input() list: Todo[];

    removeTodo(index: number): void {
        this.list.splice(index, 1);
    }

    removeRangeTodos(): void {
        for (var i = (this.list.length - 1); i > -1; i--) {
            if (this.list[i].isCompleted) {
                this.list.splice(i, 1);
            }
        }
    }
}