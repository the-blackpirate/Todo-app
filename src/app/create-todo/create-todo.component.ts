import { Component,  OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompletedTodos, Todos } from '../todos';
import { TodosService } from '../todos.service';

interface options {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  option: options[] = [
    { value: true, viewValue: 'Yes' },
    { value: false, viewValue: 'No' },
  ];
  removedTodos: CompletedTodos[];
  datas: Todos[];
  todoForm: boolean;
  isNewTodo: boolean;
  NewTodo: any = {};
  editTodoForm: boolean;
  editedTodo: any = {};


  constructor(
    public fb: FormBuilder,
    public router: Router,
    public AddService: TodosService
  ) {
  }

 
  ngOnInit() {
    this.datas = this.getTodos();
    this.removedTodos = this.getCompletedTodosData();
  }

  getTodos(): Todos[] {
    return this.AddService.getTodoFromData();
  }

  getCompletedTodosData(): CompletedTodos[] {
    return this.AddService.getCompletedTodosData();
  }

  showEditTodoForm(x: Todos) {
    if (!x) {
      this.todoForm = false;
      return;
    }
    this.editTodoForm = true;
    this.editedTodo = x;
  }

  showAddTodoForm() {
    if (this.datas.length) {
      this.NewTodo = {};
    }
    this.todoForm = true;
    this.isNewTodo = true;
  }

  save(user: Todos) {
    if (this.isNewTodo) {
      this.AddService.AddTodoData(user);
    }
    this.todoForm = false;
  }

  removeTodo(x: Todos) {
    console.log(x);
    this.AddService.delete(x);
  }

  cancelNewUser() {
    this.NewTodo = {};
    this.todoForm = false;
  }
}
