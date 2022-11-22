import { useParams } from 'react-router-dom'

const StudentDetails = () => {
  let { student_id } = useParams()
  return (
    <div>
      <div>StudentDetails</div>
      <div>Welcome student: {student_id}</div>
    </div>
  )
}

export default StudentDetails
