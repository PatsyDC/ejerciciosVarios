import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sesion10';
  color: string = 'yellow';
  todos: string[] = ['hola', 'chau', 'patsy'];
  newTodo: string = '';

  onchangeColor(color: string) {
    console.log('El color seleccionado es: ', color);
    this.color = color;
  }

  onchangeInput(){
    this.todos.push(this.newTodo); // Agregar el nuevo todo al array
    this.newTodo = '';
  }

}
