import { Todo, TodoAdd} from "../types/todo.types";
import { customAxios } from '../api/index';


async function checkUncheckTodo(id : string, data : TodoAdd) : Promise<Todo> {
  const todoRequest = JSON.stringify(data)
  console.log(todoRequest)

  const response = await customAxios.put(`/todos/${id}`,todoRequest, {method: "PUT", params:{id : {id}}} )
  return response.data;
}

export default checkUncheckTodo