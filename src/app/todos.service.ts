import { ListKeyManager } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompletedTodos, Todos } from './todos';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private datas: Todos[] = [
    {
      id: 1,
      task_name: 'Apple iPhone 12 ',
      task_desc:
        'September is already here, but where’s the new iPhone? Well, the iPhone 12 may not launch in September. Instead, the next iPhone will likely hit retail shelves in October. At this point, the delay in the availability of the iPhone 12 is certain but that doesn’t mean we will stop discussing about the next-generation iPhone. ',
      repeating_task: false,
    },
    {
      id: 2,
      task_name: 'Check Samsung',
      task_desc:
        'Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol. Samsung was founded by Lee Byung-chul in 1938 as a trading company.',
      repeating_task: false,
    },
  ];

  private removedTodos: CompletedTodos[] = []

  constructor() {}

  getTodoFromData(): Todos[] {
    return this.datas;
  }

  getCompletedTodosData(): CompletedTodos[] {
    return this.removedTodos;
  }

  AddTodoData(a: Todos) {
    a.id = this.datas.length + 1;
    this.datas.push(a);
  }

 
  delete(x: Todos) {
    x.id = this.removedTodos.length + 1;
    this.removedTodos.push(x);
    this.datas.splice(this.datas.indexOf(x), 1);
  }

}
