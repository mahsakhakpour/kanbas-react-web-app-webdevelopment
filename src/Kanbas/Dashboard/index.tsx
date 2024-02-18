import React from "react";
import {Link} from "react-router-dom";
import data from "../Database/courses.json"
import Home from "../Courses/Home";


function Dashboard() {
    return (
        <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (4)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
        {data.map((c) => (
          <div className="col" style={{width: "300px"}}>
            <div className="card">
              <img src="/images/reactjs.png" className="card-img-top"
                   style={{maxHeight: "150px"}}/>
              <div className="card-body">
                <Link className="card-title" to={`/Kanbas/Courses/${c._id}/Home`}
                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                   {c.name}</Link>
                <p className="card-text">Full Stack software developer</p>
                <Link to={"#"} className="btn btn-primary"> Go </Link> 
              
              </div>
            </div>
          </div>))}       


        

          {/*<div className="col" style={{width: "300px"}}> ... </div>
        <div className="col" style={{width: "300px"}}> ... </div>*/}
        
      </div>
    </div>
    <pre>
      {/*<code>{JSON.stringify(courses, null, 2)}</code>*/}
    </pre>
    </div>
    
      )
}
export default Dashboard;