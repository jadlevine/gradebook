import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home-text">Home</div>
      <div>Welcome to GACC</div>
      <div>
        <button>
          <Link to={'/students'}>Students</Link>
        </button>
        <button>
          <Link to={'/courses'}>Courses</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
