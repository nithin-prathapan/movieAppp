import React from 'react'
import{Link} from 'react-router-dom'
import user from './../../images/user.png.png'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
    <Link to='/'>
    <div className="logo">Movie App</div>
    </Link>
      <div className="userImage">
        <img src={user} alt="User" />
      </div>
    </div>
  )
}

export default Header