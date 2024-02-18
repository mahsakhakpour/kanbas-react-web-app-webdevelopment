import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import ModuleList from "../Modules/List";



function Assignments() {
  const { courseId } = useParams();

  const assignments = db.assignments;
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);



  console.log(courseId)
  return (
    <>
    <h2> Asssignments</h2>


        
    <table width="100%">
      <tbody>
        <tr>

          <td>
            <button>Group</button>
            <button>Assignment</button>
            <select>
              <option>Edit Assignment Dates</option>
              <option>Assignment Groups weight</option>
              <option>Gradescope 1.3</option>
              <option>Common Favorite</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
     {/* Add buttons and other fields here */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment:any) => (
              <li className="list-group-item">
            <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
            </li>))}
          </ul>
        </li>
      </ul>
             

      
    </>

    
);}
export default Assignments;

