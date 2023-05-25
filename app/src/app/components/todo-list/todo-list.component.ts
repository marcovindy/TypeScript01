import { Component } from '@angular/core';
import { Todo } from './todo'; // Přidejte import rozhraní Todo

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = []; // Pole pro ukládání TODO úkolů
  newTodo: string = ''; // Proměnná pro ukládání nového úkolu

  addTodo() {
    if (this.newTodo) {
      const todo: Todo = {
        task: this.newTodo,
        completed: false,
        time: 0, // Přidejte časový atribut pro tracker
      };
      this.todos.push(todo);
      this.newTodo = '';
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
