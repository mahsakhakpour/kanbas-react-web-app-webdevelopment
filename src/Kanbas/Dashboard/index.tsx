import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../Database/courses.json"
import db from "../Database";
import Home from "../Courses/Home";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: any


) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg"
  // });  
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //                       _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };


  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">


          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img src="/images/reactjs.png" className="card-img-top"
                  style={{ maxHeight: "150px" }} />
                <div className="card-body">


                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}


                    <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                      Edit
                    </button>

                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                      Delete
                    </button>

                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <Link to={"#"} className="btn btn-primary"> Go </Link>

                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
      <pre>
        {/*<code>{JSON.stringify(courses, null, 2)}</code>*/}
      </pre>
    </div>

  )
}
export default Dashboard;