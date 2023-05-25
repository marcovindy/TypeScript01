import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  newTodoTime: number = 0; // Nová proměnná pro ukládání odhadovaného času

  addTodo() {
    if (this.newTodo) {
      const todo: Todo = {
        task: this.newTodo,
        completed: false,
        time: this.newTodoTime, // Přiřazení odhadovaného času
      };
      this.todos.push(todo);
      this.newTodo = '';
      this.newTodoTime = 0; // Resetování hodnoty odhadovaného času
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  updateTime(index: number, time: number) {
    this.todos[index].time = time;
  }
}
