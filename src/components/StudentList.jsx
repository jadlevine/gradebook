import { Link } from 'react-router-dom'

const StudentList = ({ getAllStudents, students }) => {

    return (
        <div className="student-list-container">
          <h3> Students Enrolled</h3>
          <div className="student-list">
            {students.map((student)=> (
              <div key={student.id} className='studentListing'>
                <Link to= {`/students/${student.id}`}>{student.name}</Link>
              </div>
            ))}
          </div>

        </div>
    )
}

export default StudentList