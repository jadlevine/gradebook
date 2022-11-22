import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const StudentDetails = () => {
  let navigate = useNavigate()
  let { student_id } = useParams()
  const [studentDetails, setStudentDetails] = useState()

  const getStudentDetails = async () => {
    const student = await Client.get(`students/${student_id}`)
    setStudentDetails(student.data)
  }

  const deleteStudent = async (id) => {
    try {
      const response = await Client.delete(`/students/${id}`)
      navigate(`/students`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`)
  }

  useEffect(() => {
    getStudentDetails()
  }, [])

  if (studentDetails) {
    return (
      <div>
        <h1>{studentDetails.name}</h1>
        <div className="student-container">
          <div className="student-info">
            <h3>Student Information</h3>
            <p>Name: {studentDetails.name}</p>
            <p>Email: {studentDetails.email}</p>
            <p>GPA: {studentDetails.gpa}</p>
          </div>
          <div className="student-course-list">
            <h3>Grades</h3>
            <div className="student-grades">
              <div className="student-grades-table-header">
                <div className="table-header">Course</div>
                <div className="table-header">Credit Hours</div>
                <div className="table-header">Score</div>
                <div className="table-header">Grade</div>
              </div>
              {studentDetails.Courses.map((course) => (
                <div key={course.id} className="student-grades-table-line">
                  <div
                    className="course-grade-item blue-text"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    {course.name}
                  </div>
                  <div className="course-grade-item">{course.creditHours}</div>
                  <div className="course-grade-item">
                    {course.StudentsCourses.score}
                  </div>
                  <div className="course-grade-item">
                    {course.StudentsCourses.letter}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="delete-btn"
          onClick={() => deleteStudent(studentDetails.id)}
        >
          Delete Student
        </button>
      </div>
    )
  }
}

export default StudentDetails
