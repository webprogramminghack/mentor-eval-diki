import { Todo } from "../types/todo.types";
import { customAxios } from '../api/index';

async function deleteTodo(id: string) : Promise<Todo["id"]> {
  console.log(id)
  console.log({id})
  
  const response = await customAxios.delete(`/todos/${id}`, {params: {id:{id}}})
  console.log(response)
  const data = await response.data;

  return data;
}

export default deleteTodo