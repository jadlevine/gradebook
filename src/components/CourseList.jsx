import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom"
import Client from "../services/api"

const CourseList = ({}) => {
  const [courses, setCourses] = useState([])
  // let navigate = useNavigate()

  const GetCourses = async () => {
    // let courseList = await Client.get('/courses/all')
    // hardcoded - testing courselist
    let courseList = [
      {
        PK: 1,
        name: 'Biology 101',
        description: 'its a biology class',
        creditHours: 4
      },
      {
        PK: 2,
        name: 'English 101',
        description: 'its an english class',
        creditHours: 3
      },
      {
        PK: 3,
        name: 'CS 101',
        description: 'its a CS class',
        creditHours: 5
      }
    ]
    setCourses(courseList)
  }

  useEffect(() => {
    GetCourses()
  }, [])


    return (
        <div className="course-list-container">
          <h3> Courses Available</h3>
          <div className="course-list">
            {courses.map((course)=> (
              <div key={course.PK} className='courseListing'>
                <Link to= {`/courses/${course.PK}`}>{course.name}</Link>
              </div>
            ))}
          </div>

        </div>
    )
}

export default CourseList