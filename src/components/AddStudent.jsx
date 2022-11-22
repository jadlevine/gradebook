import { useState } from 'react'
import Client from '../services/api'


const AddStudent = ({setStudentAdded}) => {
const initialFormValues = {
  name: '',
  email: '',
  gpa: ''
}

const [addStudentFormValues, setAddStudentFormValues] = useState(initialFormValues)

const handleSubmit = async (e) => {
  e.preventDefault()
    try {
      await Client.post('/students/register',
        addStudentFormValues
      )
      setAddStudentFormValues(initialFormValues)
      setStudentAdded(true)
    } catch (error) {
      throw error
    }
}

const handleChange = (e) => {
  if(e.target.name === "creditHours") {
    console.log('hello')
    
    //this is not working yet
    const result = e.target.value.replace(/\D/g,'')
    setAddStudentFormValues({
      ...addStudentFormValues,
      [e.target.name]: result,
    })
  }
  setAddStudentFormValues({
    ...addStudentFormValues,
    [e.target.name]: e.target.value,
  })
}


  return (
    <div className="add-student-container form">
      <form className="add-student-container form" onSubmit={handleSubmit}>

      <h3> Add Student</h3>
      <input
          className="add-student-input"
          onChange={handleChange}
          type="text"
          value={addStudentFormValues.name}
          placeholder="Student Name"
          id="add-student-input-name"
          name="name"
          />
      <textarea
          className="add-student-input"
          onChange={handleChange}
          // type="textarea"
          value={addStudentFormValues.email}
          placeholder="Student Email"
          id="add-student-input-email"
          name="email"
          />
      <input
          className="add-student-input"
          onChange={handleChange}
          type="text"
          value={addStudentFormValues.gpa}
          placeholder="GPA"
          id="add-student-input-gpa"
          name="gpa"
          />
      <button className="add-student-form-btn btn">Submit</button>
          </form>
    </div>
  )
}

export default AddStudent
