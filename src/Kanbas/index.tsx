import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from"react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import Grades from "./Courses/Grades";


function Kanbas() { 
  return (
    
    
    <div className="d-flex">
     
      <KanbasNavigation />
 
 
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Account" element={<h1>Account</h1>} />          
          <Route path= "Courses/:courseId/*" element={<Courses />} />      
          <Route path="/Courses/:courseId/*" element={<Assignments />} />
          <Route path="/Courses/:courseId/*" element={<Grades />} />
          
      </Routes>

      </div>
    </div>
);}


export default Kanbas;
 // since the Kanbas component consists of an entire application with lots of screens
 // each implemented in several files, we've decided to use an entire folder to implement
 // the component. It is common use the same name for the folder and component name, but
 // it is not required.
 
 