import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>403 - Unauthorized</h1>

      <p>
        You do not have permission to access this page.
      </p>

      <Link to="/">
        Go Home
      </Link>
    </div>
  )
}

export default Unauthorized