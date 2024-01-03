import React, { useState } from 'react'

function Navbar() {
  // Use of States
  const [color, setColor] = useState('#f1356d');

  // Function for Click Events
  const changeColor = () => {
    setColor('#FF3393');
  }

  return (
    <div>
      <nav className="navbar">
        <h1 style={{color}} onClick={changeColor}>The Dancing Kitchen</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
