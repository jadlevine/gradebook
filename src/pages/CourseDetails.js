import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  let { course_id } = useParams
  const [courseDetails, setCourseDetails] = useState(null)

  // JAL - just adding a BASE_URL here so line below doesn't cause problems when compiling
  const BASE_URL = 'localhost:3001'

  useEffect(() => {
    const getCourseById = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/courses/${course_id}`)
        setCourseDetails(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCourseById()
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
    </div>
  ) : (
    <div>SORRY NO COURSE BY THAT ID!</div>
  )
}

export default CourseDetails
