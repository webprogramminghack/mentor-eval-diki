import React from 'react';
import styles from './TodoAppTitle.module.scss'

const TodoAppTitle: React.FC = () => {
  return <div className="todo-app__title">
     <h1 className={styles.h1_title}>Let&apos;s Get Things Done!</h1>
     <p className={styles.p_deskripsi}>One Step Closer To Your Goals</p>
  </div>;
};

export default TodoAppTitle;