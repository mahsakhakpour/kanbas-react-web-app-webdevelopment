import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import Grades from "./Courses/Grades";
// import db from "./Database";
import { useState, useEffect } from "react";
import axios from "axios"; 
import store from "./store";
import { Provider } from "react-redux";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "rocket-propulsion.png", _id: ""

  });

  const [courses, setCourses] = useState<any[]>([]);
  // const COURSES_API = "http://localhost:4000/api/courses";
  // const COURSES_API = "https://kanbas-node-server-app.onrender.com/api/courses";
  const COURSES_API = `${API_BASE}/api/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);



  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, courses);
  //   setCourses([...courses, { ...courses, _id: new Date().getTime().toString() }]);
  // };

  setCourses([ ...courses, response.data ]);
  };

  const deleteCourse = async (courseId: String) => {
    // setCourses(courses.filter((course) => course._id !== courseId));
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );

  };
  const updateCourse = async (updatedCourse: any) => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === updatedCourse._id) {
          return course;
        }
          return c;
        
      })
    );
  };
  
  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={<Dashboard
            />} />
          {/* <Route path= "Courses/:courseId/*" element={<Courses />} /> */}
          <Route path="Courses/:courseId/*" element={<Courses/>} />

        </Routes>
      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;

