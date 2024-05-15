import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaTodoComponent} from './lista-todo/lista-todo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ListaTodoComponent, ItemTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'sesion10';
  color: string = 'yellow';
  todos: string[] = ['hola', 'chau', 'patsy'];
  newTodo: string = '';
  task: string[] = ['task', 'hi'];

  onchangeColor(color: string) {
    console.log('El color seleccionado es: ', color);
    this.color = color;
  }

  onchangeInput(){
    this.todos.push(this.newTodo); // Agregar el nuevo todo al array
    this.newTodo = '';
  }

}
