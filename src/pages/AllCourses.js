import AddCourse from '../components/AddCourse'
import CourseList from '../components/CourseList'

const AllCourses = () => {
  return (
    <div>
      <h1>All Courses</h1>
      <div className="course-container">
        <CourseList />
        <AddCourse />
      </div>
    </div>
  )
}

export default AllCourses
