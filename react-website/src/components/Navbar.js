import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i class="fa-solid fa-bars"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {/* <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} /> */}
                    <i icon="fa-solid fa-xmark" />
                    <h1>hey</h1>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar