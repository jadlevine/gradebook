import { useState } from 'react'
import Client from '../services/api'


const AddCourse = ({setCourseAdded}) => {
const initialFormValues = {
  name: '',
  description: '',
  creditHours: ''
}

const [addCourseFormValues, setAddCourseFormValues] = useState(initialFormValues)

const handleSubmit = async (e) => {
  e.preventDefault()
    try {
      await Client.post('/courses/register',
        addCourseFormValues
      )
      setAddCourseFormValues(initialFormValues)
      setCourseAdded(true)
    } catch (error) {
      throw error
    }
}

const handleChange = (e) => {
  if(e.target.name === "creditHours") {
    const result = e.target.value.replace(/\D/g,'')
    setAddCourseFormValues({
      ...addCourseFormValues,
      [e.target.name]: result,
    })
  }
  setAddCourseFormValues({
    ...addCourseFormValues,
    [e.target.name]: e.target.value,
  })
}


  return (
    <div className="add-course-container form">
      <form className="add-course-container form" onSubmit={handleSubmit}>

      <h3> Add Course</h3>
      <input
          className="add-course-input"
          onChange={handleChange}
          type="text"
          value={addCourseFormValues.name}
          placeholder="Course Name"
          id="add-course-input-name"
          name="name"
          />
      <textarea
          className="add-course-input"
          onChange={handleChange}
          value={addCourseFormValues.description}
          placeholder="Course Description"
          id="add-course-input-description"
          name="description"
          />
      <input
          className="add-course-input"
          onChange={handleChange}
          type="text"
          value={addCourseFormValues.creditHours}
          placeholder="Credit Hours"
          id="add-course-input-creditHours"
          name="creditHours"
          />
      <button className="add-course-form-btn btn">Submit</button>
          </form>
    </div>
  )
}

export default AddCourse
