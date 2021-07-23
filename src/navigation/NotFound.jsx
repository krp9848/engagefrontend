import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Page Not Found</p>
    </div>
  )
}

export default NotFound
