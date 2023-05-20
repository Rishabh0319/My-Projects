import React from 'react'
import ProfileIcons from './ProfileIcons'

const HomeHeader = () => {
  return (
    <header className='home-header-cont'>
      <div className='home-header-btn-cont'>
        <span>Gmail</span>
        <span>Images</span>
      </div>
      <ProfileIcons />
    </header>
  )
}

export default HomeHeader