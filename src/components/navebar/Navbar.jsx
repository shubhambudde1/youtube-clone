import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/assets/menu.png'
import logo from '../../assets/assets/logo.png'
import searchIcon from '../../assets/assets/search.png'
import uploadIcon from '../../assets/assets/upload.png'
import moreIcon from '../../assets/assets/more.png'
import notificationIcon from '../../assets/assets/notification.png'
import profileIcon from '../../assets/assets/user_profile.jpg'
import { Link } from 'react-router-dom'
function navbar({ setShowSidebar }) {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menuIcon' onClick={() => setShowSidebar(prev => !prev)} src={menuIcon} alt='menu' />
        <Link to="/">
          <img className='logo' src={logo} alt='logo' />

        </Link>

      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <img src={searchIcon} alt='search' />
        </div>

      </div>
      <div className='nav-right flex-div'>
        <img src={uploadIcon} alt='upload' />
        <img src={moreIcon} alt='more' />
        <img src={notificationIcon} alt='notification' />
        <img className='user' src={profileIcon} alt='user' />

      </div>
    </nav>
  )
}

export default navbar
