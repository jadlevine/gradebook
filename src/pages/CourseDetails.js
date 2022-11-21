import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StudentData from './components/StudentData'

const CourseDetails = () => {
  let { course_id } = useParams
  const [courseDetails, setCourseDetails] = useState(null)
  const [courseStudents, setCourseStudents] = useStatue([])

  const getCourseById = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses/${course_id}`)
      setCourseDetails(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getStudentByCourseId = async () => {
    const response = await axios.get()
    setCourseStudents(response.data)
  }

  useEffect(() => {
    getCourseById()
    getStudentByCourseId
  }, [])

  return courseDetails ? (
    <div>
      <div>
        <h1>hello{courseDetails.name}</h1>
      </div>
      <div>
        <p>{courseDetails.description}</p>
      </div>
      <div>{courseDetails.credits}</div>
      <div>
        {courseStudents.map((student) => (
          <Link to={`students/${student_id}`}>
            <StudentData key={student.id} name={student.name} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div>SORRY NO COURSE BY THAT ID!</div>
  )
}

export default CourseDetails
