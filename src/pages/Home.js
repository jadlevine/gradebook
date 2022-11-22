import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home-text">Welcome to GACC</div>
      <div>
        <button className="home-buttons">
          <Link to={'/students'}>Students</Link>
        </button>
        <button className="home-buttons">
          <Link to={'/courses'}>Courses</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
