import { useState } from 'react'
import Client from '../services/api'


const AddCourse = () => {
const initialFormValues = {
  name: '',
  description: '',
  creditHours: 0
}

const [addCourseFormValues, setAddCourseFormValues] = useState({})

  return (
    <div>
      <div className="courses-container">
        <div>Course List</div>
        <div>Add Course</div>
      </div>
    </div>
  )
}

export default AddCourse
