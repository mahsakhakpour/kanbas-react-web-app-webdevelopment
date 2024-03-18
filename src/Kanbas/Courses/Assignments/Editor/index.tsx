import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./../assignmentsReducer";
import { KanbasState } from "../../../store";



function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  const [assignmentName, setAssignmentName] = useState("New Assignment");
  const [assignmentDescription, setAssignmentDescription] = useState("New Assignment Points");
  const [assignmentPoints, setAssignmentPoints] = useState("100");
  const [assignmentdate, setAssignmentDate] = useState(new Date());
  const [availableFromDate, setAvailableFromDate] = useState(new Date());
  const [availableUntilDate, setAvailableUntilDate] = useState(new Date());
  const assignments =  useSelector((state: KanbasState) => state.assignmentsReducer.assignments);;
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  
    
    const pathName = useLocation();


    const handleSave = () => {
      const assignmentData = {
        title: assignmentName,
        description: assignmentDescription,
        points: assignmentPoints,
        dueDate: assignmentdate.toString(),
        availableFromDate: availableFromDate.toString(),
        availableUntilDate: availableUntilDate.toString(),
        course: courseId 
      };
      console.log(assignmentData)
    
      dispatch(addAssignment(assignmentData));
    };





    
  
  const handleCreateAssignment = () => {
    const assignmentData = {};
    dispatch(addAssignment(assignmentData));
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDeleteAssignment = () => {
    dispatch(deleteAssignment(assignmentToDelete));
    setShowDeleteDialog(false);
  };

  const cancelDeleteAssignment = () => {
    setShowDeleteDialog(false);
  };

  return (
    <>

          <p>Assignment Name</p>
          <input
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
          <br />
          <br />

          <textarea
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
          <br />
          <br />

          <p>Points</p>
          <input
            value={assignmentPoints}
            onChange={(e) => setAssignmentPoints(e.target.value)}
          />

          <br />
          <br />
          <p>Assign</p>

          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
            <label>
              Due Date:
              <input
                type="date"
                name="dueDate"
                value={assignmentdate.toISOString().split('T')[0]}
                onChange={(e) => setAssignmentDate(new Date(e.target.value))}
              />
            </label>
            <br />
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '1rem' }}>
                Available From:
                <input
                  type="date"
                  name="availableFromDate"
                  value={availableFromDate.toISOString().split('T')[0]}
                  onChange={(e) => setAvailableFromDate(new Date(e.target.value))}
                />
              </label>
              <label>
                Available Until:
                <input
                  type="date"
                  name="availableUntilDate"
                  value={availableUntilDate.toISOString().split('T')[0]}
                  onChange={(e) => setAvailableUntilDate(new Date(e.target.value))}
                />
              </label>
            </div>
          </div>
          <hr />
          <div className="container">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="delete-button" onClick={cancelDeleteAssignment}>Cancel</button>
          </div>
        
    </>
  );
}

export default Assignments;

