import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AllCourses from './pages/AllCourses'
import AllStudents from './pages/AllStudents'
import CourseDetails from './pages/CourseDetails'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import StudentDetails from './pages/StudentDetails'
import Nav from './components/Nav'

// import { CheckSession } from './services/Auth'
// import LogIn from './components/LogIn'
// import Register from './components/Register'

function App() {
  return (
    <div>
      <div className="header-container">
        <Nav />
        {/* <Nav user={user} handleLogOut={handleLogOut} /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:student_id" element={<StudentDetails />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:course_id" element={<CourseDetails />} />
      </Routes>
    </div>
  )
}

export default App
