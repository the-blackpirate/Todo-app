import { Component, OnInit } from '@angular/core';
import { CompletedTodos} from '../todos';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css'],
})
export class CompletedTodosComponent implements OnInit {
  removedTodos: CompletedTodos[];

  constructor(public AddService: TodosService) {}

  getCompletedTodosData(): CompletedTodos[] {
    return this.AddService.getCompletedTodosData();
  }

  ngOnInit(): void {
        this.removedTodos = this.getCompletedTodosData();
  }
}
