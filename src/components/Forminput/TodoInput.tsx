import React, { useState } from 'react';
import styles from './TodoInput.module.scss'
import { TodoAdd, ResponseData, Todo } from "../../types/todo.types";
import { customAxios } from '../../api/index';




const TodoInput: React.FC = () => {
  const [data, setData] = useState<TodoAdd>({
    title : "",
    completed : false
  })

  const [todos, setTodos] = useState<ResponseData["todos"]>([])
  
  const handelInput = (event: React.ChangeEvent<HTMLInputElement>) => { 
    event.preventDefault();
    const { title, value } = event.target;
    console.log(title, value)
    setData({ title: value, completed: false  });   
  }
  

  const handelSubmit = async () => {
    const body = JSON.stringify(data)
  
    try {       
      const response = await customAxios.post('todos', body, {method : "POST"});   
      if (response) {
        alert('Form submitted successfully!');
        console.log(response)
        
        const responseTodo : Todo = await response.data;
        setTodos([responseTodo ,...todos])
        setData({title: "" ,completed: false})
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.log(error);
    } 
  }
    
  return <form className={styles.todo_input} onSubmit={ handelSubmit}  >
    <input className={styles.input_item} type="textarea" placeholder="Type You Todo " value={data.title} onChange={handelInput} />
    <button className={styles.button_submit} type="submit">Add</button>
</form>;
};

export default TodoInput;
