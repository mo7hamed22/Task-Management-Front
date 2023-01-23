import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasksAsync } from '../redux/reducers/tasks/tasks.thunks';

const TaskList = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const { isLoading, tasks, errorMessage } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    dispatch(loadTasksAsync());
    console.log('useEffect');
  }, []);
  return (
    <>
      <h1>TaskList </h1>
      {isLoading && <h3>Loading...</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      {tasks &&
        tasks.map((task) => (
          <h1 className="display-2" key={task.id}>
            {task.title}
          </h1>
        ))}
    </>
  );
};

export default TaskList;
