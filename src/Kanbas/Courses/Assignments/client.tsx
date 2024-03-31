import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = "http://localhost:4000/api/modules";


export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios
    .delete(`${MODULES_API}/${assignmentId}`);
  return response.data;
};


export const createAssignment = async (courseId: any, assignment: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    module
  );
  return response.data;
};


export const findAssignmentForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: { _id: any; }) => {
  const response = await axios.
    put(`${MODULES_API}/${assignment._id}`, assignment);
  return response.data;
};

