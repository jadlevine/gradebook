import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllCourses from './pages/AllCourses'
import AllStudents from './pages/AllStudents'
import CourseDetails from './pages/CourseDetails'
import Home from './pages/Home'
import StudentDetails from './pages/StudentDetails'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <div className="header-container">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:student_id" element={<StudentDetails />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:course_id" element={<CourseDetails />} />
      </Routes>
    </div>
  )
}

export default App
