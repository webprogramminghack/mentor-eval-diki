import { ResponseData } from "../types/todo.types";
import { customAxios } from '../api/index';

async function fetchTodos(): Promise<ResponseData["todos"]> {
  const response = await customAxios.get('/todos/scroll/',{method:"GET", params: { limit: 20 ,order: "desc"}});
  const data = await response.data;
  const todosList = await data.todos;
 
  return todosList;
}

export default fetchTodos