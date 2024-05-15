import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-todo',
  standalone: true,
  imports: [],
  templateUrl: './lista-todo.component.html',
  styleUrl: './lista-todo.component.css'
})
export class ListaTodoComponent {
  @Input() tasks:any;

}
