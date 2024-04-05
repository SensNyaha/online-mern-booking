import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav bg-light d-flex justify-content-between'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/login">Sign In</Link>
        <Link className='nav-link' to="/register">Sign Up</Link>

    </div>
  )
}

export default Nav