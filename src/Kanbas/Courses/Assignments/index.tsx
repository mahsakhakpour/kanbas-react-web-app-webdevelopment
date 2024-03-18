import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: string;
  date: Date;
  availableFrom: Date;
  availableUntil: Date;
  course: string;
}

interface AssignmentsEditorProps {
  assignment: Assignment;
}

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  
 

    let assignmentsList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    assignmentsList=assignmentsList.filter((assignment) => assignment.course === courseId)
    console.log(assignmentsList)

  const handleCreateAssignment = () => {
    const assignmentData = {}; 
    dispatch(addAssignment(assignmentData));
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDeleteAssignment = (assignmentId: string | null) => {
    if (assignmentId) {
      dispatch(deleteAssignment(assignmentId));
      setShowDeleteDialog(false);
    }
  };

  const cancelDeleteAssignment = () => {
    setShowDeleteDialog(false);
  };

  return (
    <>
      <h2>Assignments</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <input
                type="text"
                placeholder="Search for assignment"
                style={{ width: '200px', padding: '5px' }}
              />
            </div>
            <div>
              <button onClick={handleCreateAssignment}>+Group</button>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}><button 
              style={{ backgroundColor: 'red', color: 'white'}}>+ Assignment</button></Link>
            </div>
          </div>

          <ul className="list-group wd-modules">
            <li className="list-group-item">
              <div>
                <FaEllipsisV className="me-2" /> ASSIGNMENTS
                <span className="float-end">
                  <FaPlusCircle className="ms-2" onClick={handleCreateAssignment} />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              <ul className="list-group">
                {assignmentsList.map((assignment) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={assignment._id}>
                    <div>
                      <FaEllipsisV className="me-2" />
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                    </div>
                    <div>
                      <FaCheckCircle className="text-success me-2" />
                      <FaTrash className="text-danger" onClick={() => handleDeleteAssignment(assignment._id)} />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      {showDeleteDialog && (
        <div className="delete-dialog">
          <div className="modal-content">delete
            <p>Are you sure you want to delete this assignment?</p>
            <div>
              
              <button onClick={() => confirmDeleteAssignment(assignmentToDelete)}>Yes</button>
              <button onClick={cancelDeleteAssignment}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Assignments;
