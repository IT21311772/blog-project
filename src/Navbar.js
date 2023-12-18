import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>The Dancing Kitchen</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
