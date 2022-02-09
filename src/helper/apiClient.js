import axios from 'axios';
let base_url = 'http://localhost:3200/api/tasks';

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: base_url,
    responseType: "jason",
  });
  return axiosInstance;
};
export default apiClient;
