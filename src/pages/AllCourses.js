import AddCourse from '../components/AddCourse'
import CourseList from '../components/CourseList'
import { useState, useEffect } from 'react'

const AllCourses = () => {
  const [courses, setCourses] = useState([])
  // let navigate = useNavigate()

  const getAllCourses = async () => {
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
    getAllCourses()
  }, [])

  return (
    <div>
      <h1>All Courses</h1>
      <div className="course-container">
        <CourseList getAllCourses={getAllCourses} courses={courses} />
        <AddCourse getAllCourses={getAllCourses} />
      </div>
    </div>
  )
}

export default AllCourses
