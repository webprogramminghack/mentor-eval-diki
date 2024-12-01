import React from 'react';
import TodoAppTitle from './TodoAppTitle';

const AppHeader: React.FC = () => {
  return <div className="todo-app__header">
    <TodoAppTitle/>
  </div>
};

export default AppHeader;