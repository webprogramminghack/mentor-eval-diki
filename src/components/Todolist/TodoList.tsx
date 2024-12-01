import styles from './TodoList.module.scss'
import React, {useState, useEffect } from 'react';
import { Button } from '../Button';
import SVGIcon from '../../assets/svg/icon-trash.svg';
import  fetchTodos  from "../../hooks/useGetTodos";
import {ResponseData, Todo, TodoAdd} from '../../types/todo.types';
import  deleteTodo  from "../../hooks/useDeleteTodo";
import  checkUncheckTodo from "../../hooks/useCheckedUnchecked";


const TodoList : React.FC = () => {
  const [todosData, setTodosData] = useState<ResponseData["todos"]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [data, setData] = useState<TodoAdd>(Object)
  const [dataId, setDataId] = useState<Todo["id"]>("")

  useEffect(() => { 
    async function fetchData() {
      try {
        const data = await fetchTodos();
        setTodosData(data);
        console.log(data)
      } catch (error ) {
        alert(error)
        console.log(error)
        setErrorMessage(error.message);
      }
    };
    fetchData();
    
  },[]);

  useEffect(() => {
    async function fetchCHecked() {
    if (data.completed === true) {
      console.log( `no id-1 ${dataId}`)
      const response = await checkUncheckTodo(dataId, data )
      console.log(response)
    }
    if (data.completed === false) {
      console.log( `no id-2 ${dataId}`)
      const response = await checkUncheckTodo(dataId, data )
      console.log(response)
    }
  }
  fetchCHecked()
    
  }, [data, dataId])

  

  const onDelete = async (id: string) => {
    try {
      const response = await deleteTodo(id);
      console.log(response)
      if(response) {
      const todos = todosData.filter(note => note.id !== id);
    setTodosData( todos );
  }
    } catch (error) {
      alert(error)
      console.log(error)
      setErrorMessage(error.message);
    }
    
  }

  if (errorMessage) {
    return <div>Error : {errorMessage} </div>;
  }

  return <div>{ todosData?.map(todo => (
    <div className={styles.todo_item} key={todo.id}>
      <input className={styles.item_checkbox} type="checkbox" defaultChecked={todo.completed} id= {todo.id}value={todo.title} onChange={(event)=> {setData({ title: event.target.value , completed: !!event.target.checked}); setDataId(event.target.id)}} />
      <p className={styles.item_title}>{todo.title} </p>
      <Button onClick={() =>{onDelete(todo.id)} }> {<SVGIcon />} </Button>
    </div>
))}</div>
};

export default TodoList ;