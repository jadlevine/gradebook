// import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom"
// import Client from "../services/api"

const CourseList = ({ getAllCourses, courses }) => {

    return (
        <div className="course-list-container">
          <h3> Courses Available</h3>
          <div className="course-list">
            {courses.map((course)=> (
              <div key={course.id} className='courseListing'>
                <Link to= {`/courses/${course.id}`}>{course.name}</Link>
              </div>
            ))}
          </div>

        </div>
    )
}

export default CourseList