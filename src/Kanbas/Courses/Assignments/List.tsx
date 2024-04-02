import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } from "./reducer";
import { createAssignment, findAssignmentsForCourse } from "./client";
import { KanbasState } from "../../store";
import * as client from "./client";

function AssignmentList() {
  const { courseId } = useParams();

  const [handleAssignmentDelete, setAssignmentIdToDelete] = useState(null);


  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment: any) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleDeleteAssignment = (assignmentId: any) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);


 

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          value={assignment.name}
          onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))} />
        <br />
        <br />
        <textarea
          value={assignment.description}
          onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <button
            onClick={handleAddAssignment}
            style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>Add</button>
          <button
            onClick={handleUpdateAssignment}
            style={{ backgroundColor: 'blue', color: 'white', marginLeft: '5px' }}>Update</button>

            
        </div>
      </li>
      {assignmentList
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <li key={index} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>{assignment.name}</h3>
              <p>{assignment.description}</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(setAssignment(assignment))}
                style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' }}>Edit</button>
               {/* <button
                onClick={() => handleDeleteAssignment(assignment)}
                style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>  */}

<button onClick={() => setAssignmentIdToDelete(assignment._id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default AssignmentList;