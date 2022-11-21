import { Link } from 'react-router-dom'

const Nav = () => {

  let user = true
  const authenticatedOptions = (
      <nav>
        <div className="welcome-container">
          <h3 className="welcome-note">Welcome {user.name}!</h3>          
        </div>
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/courses">Courses</Link>
          <Link onClick={handleLogOut} to="/">
          Sign Out
          </Link>
        </div>
      </nav>
    )

  const publicOptions = (
    <nav>
      <div className="welcome-container">
        <h3 className="welcome-note">Welcome to GradeBook!</h3>
      </div>
      <div className="nav-options">
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  )

  return (
    <header>
      {user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav