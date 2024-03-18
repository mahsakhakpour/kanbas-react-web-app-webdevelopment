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

// function AssignmentsEditor({ assignment }: AssignmentsEditorProps) {
//   const dispatch = useDispatch();
//   const [assignmentName, setAssignmentName] = useState(assignment.title);
//   const [assignmentDescription, setAssignmentDescription] = useState(assignment.description);
//   const [assignmentPoints, setAssignmentPoints] = useState(assignment.points);
//   const [assignmentDate, setAssignmentDate] = useState(assignment.date);
//   const [availableFromDate, setAvailableFromDate] = useState(assignment.availableFrom);
//   const [availableUntilDate, setAvailableUntilDate] = useState(assignment.availableUntil);

//   const handleSave = () => {
//     const updatedAssignment = {
//       ...assignment,
//       title: assignmentName,
//       description: assignmentDescription,
//       points: assignmentPoints,
//       date: assignmentDate,
//       availableFrom: availableFromDate,
//       availableUntil: availableUntilDate
//     };
//     console.log(updatedAssignment)
//     dispatch(updateAssignment(updatedAssignment));
  
//   };

//   const handleCancel = () => {
    
//   };

//   return (
//     <>
//       <h2>Edit Assignmen</h2>
//       <div>
//         <label>Title:</label>
//         <input type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)} />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea value={assignmentDescription} onChange={(e) => setAssignmentDescription(e.target.value)} />
//       </div>
//       <div>
//         <label>Points:</label>
//         <input type="text" value={assignmentPoints} onChange={(e) => setAssignmentPoints(e.target.value)} />
//       </div>
//       <div>
//         <label>Date:</label>
//         <input type="date" value={assignmentDate.toString()} onChange={(e) => setAssignmentDate(new Date(e.target.value))} />
//       </div>
//       <div>
//         <label>Available From:</label>
//         <input type="date" value={availableFromDate.toString()} onChange={(e) => setAvailableFromDate(new Date(e.target.value))} />
//       </div>
//       <div>
//         <label>Available Until:</label>
//         <input type="date" value={availableUntilDate.toString()} onChange={(e) => setAvailableUntilDate(new Date(e.target.value))} />
//       </div>
//       <div className="container">
//         <button className="save-button" onClick={handleSave}>Save</button>
//         <button className="delete-button" onClick={handleCancel}>Cancel</button>
//       </div>
//     </>
//   );
// }

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  
 

    let assignmentsList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    assignmentsList=assignmentsList.filter((assignment) => assignment.course === courseId)
    

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
