import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } from "./assignmentsReducer";
import { KanbasState } from "../../store";
import { findAssignmentForCourse, createAssignment } from "./client";
import * as client from "./client";

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

  useEffect(() => {
    findAssignmentForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);


  const assignmentsList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}
            style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>Add</button>
          <button
            onClick={() => dispatch(updateAssignment(assignment))}
            style={{ backgroundColor: 'blue', color: 'white', marginLeft: '5px' }}>Update</button>
        </div>
      </li>
      {assignmentsList
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
                style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}>Edit</button>
              <button
                onClick={() => dispatch(deleteAssignment(assignment._id))}
                style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Assignments;
