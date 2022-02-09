import actionTypes from './taska.actionType';

const tasksLoadStart = () => ({
  type: actionTypes.TASKS_LOAD_START,
});

const tasksLoadSuccess = (tasks) => ({
  type: actionTypes.TASKS_LOAD_SUCCESS,
  payload: tasks,
});

const tasksLoadError = (errorMessage) => ({
  type: actionTypes.TASKS_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  tasksLoadStart,
  tasksLoadSuccess,
  tasksLoadError,
};
