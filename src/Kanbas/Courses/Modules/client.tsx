import axios from "axios";
// const COURSES_API = "http://localhost:4000/api/courses";
// const COURSES_API = "https://kanbas-node-server-app.onrender.com/api/courses";
// const MODULES_API = "https://kanbas-node-server-app.onrender.com/api/modules";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;
export const findModulesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
