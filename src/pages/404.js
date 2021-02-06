import { Link } from 'gatsby'
import React from 'react'

const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry... page doesn't exist</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Error404