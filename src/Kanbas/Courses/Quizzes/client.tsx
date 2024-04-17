import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export const deleteQuiz = async (QuizId: any) => {
  const response = await axios
    .delete(`${QUIZZES_API}/${QuizId}`);
  return response.data;
};


export const updateQuiz = async (Quiz: { _id: any; }) => {
  const response = await axios.
    put(`${QUIZZES_API}/${Quiz._id}`, Quiz);
  return response.data;
};


export const createQuiz = async (courseId: any, quiz: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};

export const findQuizzesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};