import AddStudent from '../components/AddStudent'
import StudentList from '../components/StudentList'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const AllStudents = () => {
  const [students, setStudents] = useState([])
  const [studentAdded, setStudentAdded] = useState(true)

  const getAllStudents = async () => {
    try {
      let studentList = await Client.get('/students')
      setStudents(studentList.data)
      setStudentAdded(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getAllStudents()
  }, [studentAdded])

  return (
    <div>
      <h1>All Students</h1>
      <div className="student-container">
        <StudentList getAllStudents={getAllStudents} students={students} />
        <AddStudent setStudentAdded={setStudentAdded} />
      </div>
    </div>
  )
}

export default AllStudents
