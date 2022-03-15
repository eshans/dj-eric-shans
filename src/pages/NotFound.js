import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p className="error">
        404 Error - Page Not Found!
        </p>
      <p>
        <Link className='link' to='/'>
          Back To Home
        </Link>
      </p>
    </div>
  )
}

export default NotFound
