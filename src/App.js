import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import TaskList from './components/TaskList';
import TaskPage from './components/TaskPage';
function App() {
  return (
      <div>
        <TaskPage />
        <TaskList />
      </div>
  );
}

export default App;
