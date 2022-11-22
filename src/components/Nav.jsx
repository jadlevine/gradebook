import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
      <nav className='nav-bar'>
        <div className="welcome-container">
          <h3 className="welcome-note">Welcome!</h3>          
        </div>
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </nav>
  )
}

export default Nav