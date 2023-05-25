import { Component } from '@angular/core';

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
        completed: false
      };
      this.todos.push(todo); // Přidání nového úkolu do pole
      this.newTodo = ''; // Vymazání hodnoty vstupního pole
    }
  }
  
  deleteTodo(index: number) {
    this.todos.splice(index, 1); // Odstranění úkolu z pole podle indexu
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed; // Přepnutí stavu hotovosti úkolu
  }
}

interface Todo {
  task: string;
  completed: boolean;
}
