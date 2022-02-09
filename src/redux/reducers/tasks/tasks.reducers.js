import actionTypes from './taska.actionType';
import initialState from './tasks.initialState';

const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TASKS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        tasks: null,
        errorMessage: null,
      };

    case actionTypes.TASKS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: payload,
      };

    case actionTypes.TASKS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default tasksReducer;
