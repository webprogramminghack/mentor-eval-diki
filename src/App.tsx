import styles from './App.module.scss';
import React from 'react';
import AppHeader from './components/Header/AppHeader';
import TodoInput from './components/Forminput/TodoInput';
import TodoList from './components/Todolist/TodoList';




const App: React.FC = () => {

  return <div className={styles.todo_body}>
    <AppHeader/>
    <TodoInput/>
    <TodoList/>
  </div>;
};

export default App;
