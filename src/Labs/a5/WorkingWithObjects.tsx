import React, { useEffect, useState } from "react";
import { setModule } from "../../Kanbas/Courses/Modules/reducer";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  const [module, setModule] = useState({
    id: 1,
    modulename: "Web Development",
    description: "Spring 2024",
    course: "CS5610"
  });
  const MODULE_URL = "http://localhost:4000/a5/module"

  return (
    <div>

      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
        ...assignment, title: e.target.value
      })}
        value={assignment.title} type="text" />
      <br />
      <br />
      <button onClick={updateTitle} className="btn btn-primary" >
        Update Title to: {assignment.title}
      </button>
      <br />
      <br />
      <button onClick={fetchAssignment} className="btn btn-primary" >
        Fetch Assignment
      </button>
      <div>
        <p>{assignment.id}</p>
        <p>{assignment.title}</p>
        <p>{assignment.description}</p>
        <p>{assignment.due}</p>
        <p>{assignment.completed}</p>
        <p>{assignment.score}</p>
      </div>
      <br />
      <br />

      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary"
        href="http://localhost:4000/a5/assignment">Get Assignment</a>

      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary"
        href="http://localhost:4000/a5/assignment/title">Get Title</a>

      <h4>Retrieving Modules</h4>
      <a className="btn btn-primary"
        href="http://localhost:4000/a5/module">Get Module</a>

      <h4>Retrieving Modules Name</h4>
      <a className="btn btn-primary"
        href="http://localhost:4000/a5/module/modulename">Get Module Name</a>


      <h4>Modifying Properties</h4>

      <input style={{ marginRight: '15px',}} type="text"
        onChange={(e) => setAssignment({
          ...assignment,
          title: e.target.value
        })}
        value={assignment.title} />

      <a className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <br />
      <br />
      <input style={{ marginRight: '15px',}} type="text"
        onChange={(e) => setModule({
          ...module,
          modulename: e.target.value
        })}
        value={module.modulename} />

      <a className="btn btn-primary"
        href={`${MODULE_URL}/modulename/${module.modulename}`}>
        Update Module Name
      </a>
    </div>

  );
}
export default WorkingWithObjects;