import { Link } from 'react-router-dom'

const Nav = (props) => {
  //props??
  const handleLogOut = () =>{
    console.log(`I don't belong here, just holding space for this function... which probably should live up in App.js`)
  }


  let user = true
  const authenticatedOptions = (
      <nav className='nav-bar'>
        <div className="welcome-container">
          <h3 className="welcome-note">Welcome {user.name}!</h3>          
        </div>
        <div className="nav-options">
          <Link to="/" className="linky">Home</Link>
          <Link to="/students" className="linky">Students</Link>
          <Link to="/courses" className="linky">Courses</Link>
          <Link onClick={handleLogOut} to="/">
          Sign Out
          </Link>
        </div>
      </nav>
    )

  const publicOptions = (
    <nav className='nav-bar'>
      <div className="welcome-container">
        <h3 className="welcome-note">Welcome to GradeBook!</h3>
      </div>
      <div className="nav-options">
        <Link to="/register" className="linky">Register</Link>
        <Link to="/signin" className="linky">Sign In</Link>
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