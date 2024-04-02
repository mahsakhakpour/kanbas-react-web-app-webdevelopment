import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./reducer";
import { createModule, findModulesForCourse } from "./client";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const handleAddModule = () => {
    createModule(courseId, module).then((module: any) => {
      dispatch(addModule(module));
    });
  };


  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };






  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules: any) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


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
            onClick={handleAddModule}
            style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>Add</button>
          <button
            onClick={handleUpdateModule}
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
                style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' }}>Edit</button>
              <button
                onClick={() => handleDeleteModule(module._id)}
                style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;