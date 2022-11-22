import { Link } from 'react-router-dom'


const CourseList = ({ getAllCourses, courses }) => {

    return (
        <div className="course-list-container">
          <h3> Courses Available</h3>
          <div className="course-list">
            {courses.map((course)=> (
              <div key={course.id} className='courseListing'>
                <Link to= {`/courses/${course.id}`}>{course.name}</Link>
              </div>
            ))}
          </div>

        </div>
    )
}

export default CourseList