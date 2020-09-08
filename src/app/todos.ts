// export class Todos {

//     constructor(public  task_name: string,
//     public task_desc: string,
//     public repeating_task: boolean
// ){

//     }
// }

export interface Todos {
  id: number;
  task_name: string;
  task_desc: string;
  repeating_task: boolean;
}

export interface CompletedTodos {
  id: number;
  task_name: string;
  task_desc: string;
  repeating_task: boolean;
}