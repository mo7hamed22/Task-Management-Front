import TasksService from '../../../services/taskServices';
import actions from './tasks.acion';

export const loadTasksAsync = () => (dispatch) => {
  dispatch(actions.tasksLoadStart());

  TasksService.getALLTasks()
    .then((response) => dispatch(actions.tasksLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.tasksLoadError(error.message)));
};
