import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  AllCourses,
  AllStudents,
  CourseDetails,
  Home,
  Register,
  SignIn,
  StudentDetails
} from './pages'
// import Nav from './components/NavBar'

// import { CheckSession } from './services/Auth'
// import LogIn from './components/LogIn'
// import Register from './components/Register'

function App() {
  return (
    <div>
      <div className="header-container">
        {/* <Nav user={user} handleLogOut={handleLogOut} /> */}

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
    </div>
  )
}

export default App
