import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const StudentDetails = () => {
  let navigate = useNavigate()
  let { student_id } = useParams()
  const [studentDetails, setStudentDetails] = useState()
  // const [studentCourses, setStudentCourses] = useState([])

  const getStudentDetails = async () => {
    const student = await Client.get(`students/${student_id}`)
    setStudentDetails(student.data)
    // const courses = await Client.get(`studentscourses/courses/${student_id}`)
    // console.log(courses)
    // setStudentCourses(courses)
  }

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`)
  }

  useEffect(() => {
    getStudentDetails()
  }, [])

  console.log(studentDetails)
  // console.log(studentCourses)

  if (studentDetails) {
    return (
      <div>
        <h1>Student Details</h1>
        <div className="student-container">
          <div className="student-info">
            <h3>Student Information</h3>
            <p>Name: {studentDetails.name}</p>
            <p>Email: {studentDetails.email}</p>
            <p>GPA: {studentDetails.gpa}</p>
          </div>
          <div className="student-course-list">
            <h3>Grades</h3>
            <div className="student-grades-table-header">
              <div className="table-header">Course</div>
              <div className="table-header">Credit Hours</div>
              <div className="table-header">Score</div>
              <div className="table-header">Grade</div>
              <div className="table-header">GPA points*</div>
            </div>
            {studentDetails.Courses.map((course) => (
              <div key={course.id} className="course-grade-line">
                <p
                  className="course-grade-item blue-text"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  {course.name}
                </p>
                <p className="course-grade-item">{course.creditHours}</p>
                <p className="course-grade-item">
                  {course.StudentsCourses.score}
                </p>
                <p className="course-grade-item">
                  {course.StudentsCourses.letter}
                </p>
                <p className="course-grade-item">ToDo?</p>
              </div>
            ))}
            <div className="table-footer">
              ToDo? *GPA points calculated as Grade(on 4.0 scale) * Credit Hours
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentDetails
