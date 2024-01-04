import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
