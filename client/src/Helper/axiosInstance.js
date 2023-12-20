import axios from "axios";

const Base_Url = "https://lms-new-server.onrender.com/api/vi";

const axiosInstance= axios.create();

axiosInstance.defaults.baseURL= Base_Url;
axiosInstance.defaults.withCredentials=true;

export default axiosInstance;