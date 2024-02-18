import React from "react";
import { Navigate, Route, Routes,  useParams } from "react-router-dom";
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


function Courses() {
    const {cid} = useParams ();
    const course = database.courses.find((course) => course._id === cid);
    return (
<>
    <div>
    <h1><HiMiniBars3 /> Course {course?.name}</h1>
    <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Modules" element={<ModuleList/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"  element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

  </div>
</>
    );
}
export default Courses;