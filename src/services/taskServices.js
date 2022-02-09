import apiClient from '../helper/apiClient';
class TasksServices {
  getALLTasks = () => apiClient().get('getALL');
}
export default new TasksServices();
