import AddCourse from '../components/AddCourse'
import CourseList from '../components/CourseList'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const AllCourses = () => {
  const [courses, setCourses] = useState([])
  const [courseAdded, setCourseAdded] = useState(true)
  // let navigate = useNavigate()

  const getAllCourses = async () => {
    try {
      let courseList = await Client.get('/courses')
      setCourses(courseList.data)
      setCourseAdded(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getAllCourses()
  }, [courseAdded])

  return (
    <div>
      <h1>All Courses</h1>
      <div className="course-container">
        <CourseList getAllCourses={getAllCourses} courses={courses} />
        <AddCourse setCourseAdded={setCourseAdded} />
      </div>
    </div>
  )
}

export default AllCourses
