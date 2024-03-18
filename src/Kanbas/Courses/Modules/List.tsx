import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
        <br />
        <br />
        <textarea
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>Add</button>
          <button
            onClick={() => dispatch(updateModule(module))}
            style={{ backgroundColor: 'blue', color: 'white', marginLeft: '5px' }}>Update</button>
        </div>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(setModule(module))}
                style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}>Edit</button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
