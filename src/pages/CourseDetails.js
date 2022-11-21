import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Client from '../services/api'
// import StudentData from '../components/StudentData'

const CourseDetails = () => {
  let { course_id } = useParams
  const [courseDetails, setCourseDetails] = useState(null)
  const [courseStudents, setCourseStudents] = useState([])

  const getCourseDetails = async () => {
    const response = await Client.get(`courses/${course_id}`)
    setCourseDetails(response.data)
    console.log('hello')
  }

  // const getStudentByCourseId = async () => {
  //   const response = await Client.get('gradebook/courses')
  //   setCourseStudents(response.data)
  // }

  useEffect(() => {
    getCourseDetails()
    // getStudentByCourseId()
  }, [])

  return courseDetails ? (
    <div>
      <div>
        <h1>{courseDetails.name}</h1>
      </div>
      <div>
        <p>{courseDetails.description}</p>
      </div>
      <div>{courseDetails.credits}</div>
      <div>
        {courseStudents.map((student) => (
          <Link to={`students/${student.id}`}>
            {student.name}
            {/* <StudentData key={student.id} name={student.name} /> */}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div>SORRY NO COURSE BY THAT ID!</div>
  )
}

export default CourseDetails
