import React, { useState } from 'react'
import {FiBell, FiPlus} from 'react-icons/fi'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Menu from './Menu'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
      {/* Left Navbar */}
      <div className='navLeft'>
        <Link to="/">
          <img src="/src/img/github.svg" alt="Github"  />
        </Link>

        <div>
            <input type="text" placeholder='Search or jump to..' />
        </div>
      </div>

      {/* Center Navbar */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>

      {/* Right Navbar */}
      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
            <FiPlus />
            <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
            <img src="/src/img/tihanapic.png" alt="apple" />
            <IoMdArrowDropdown />
        </div>
      </div>

      {showMenu && <Menu />}
    </nav>
  );
}

export default Navbar;
