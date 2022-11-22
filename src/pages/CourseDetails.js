import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const CourseDetails = () => {
  let navigate = useNavigate()
  let { course_id } = useParams()
  const [courseDetails, setCourseDetails] = useState()

  const getCourseDetails = async () => {
    const response = await Client.get(`courses/${course_id}`)
    setCourseDetails(response.data)
  }

  const deleteCourse = async (id) => {
    try {
      const response = await Client.delete(`/courses/${id}`)
      navigate(`/courses`)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCourseDetails()
  }, [])

  return courseDetails ? (
    <div>
      <h1>{courseDetails.name}</h1>
      <div className="course-container">
        <div className="course-info">
          <h3>Course Information</h3>
          <p>Name: {courseDetails.name}</p>
          <p>Description: {courseDetails.description}</p>
          <p>Credit Hours: {courseDetails.creditHours}</p>
        </div>
        <div className="course-course-list">
          <h3>Student List</h3>
          <div className="student-list-table-item table-header">
            <div>Student Name</div>
            <div>GPA</div>
          </div>
          {courseDetails.Students.map((student) => (
            <div key={student.id} className="student-list-table-item">
              <div
                className="student-name blue-text"
                onClick={() => navigate(`/students/${student.id}`)}
              >
                {student.name}
              </div>
              <div className="student-gpa">{student.gpa}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteCourse(courseDetails.id)}
      >
        Delete Course
      </button>
    </div>
  ) : (
    <div>SORRY NO COURSE BY THAT ID!</div>
  )
}

export default CourseDetails
