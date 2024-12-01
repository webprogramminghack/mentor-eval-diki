export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    date: Date;
  }
  
export interface ResponseData {
    todos: Todo[];
  }


export interface TodoAdd {
    title : string;
    completed : boolean;
}



