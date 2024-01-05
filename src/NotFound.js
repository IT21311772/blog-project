import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
      <h2>Sorry !!!</h2>
      <p>This page does not exist</p>
      <Link to='/' className='link'>Back to Home Page</Link>
    </div>
  )
}

export default NotFound
