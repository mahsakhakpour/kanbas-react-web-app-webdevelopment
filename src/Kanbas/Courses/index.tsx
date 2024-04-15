import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import database from "../Database";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import course from "../Database/courses.json"
import ModuleList from "./Modules/List";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import db from "../Database"
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

// function Courses({ courses }: { courses: any[]; }) {
  function Courses() {
  // const courses=db.courses;
  const { courseId } = useParams();
  const COURSES_API =  `${API_BASE}/api/courses`;

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    
    
    const API = axios.create({
      baseURL: COURSES_API, // API URL
      withCredentials: true,
  });

    
    
    const response = await API.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
    // const course = courses.find((course) => course._id === courseId);
  // console.log(course);
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <>
      <div>
        <h1><HiMiniBars3 /> Course {course?.name}</h1>
        <CourseNavigation />
        {/* < ModuleList /> */}
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{ left: "320px", top: "50px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              {/* <Route path="Modules" element={<ModuleList/>} /> */}
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>

      </div>
    </>
  );
}
export default Courses;