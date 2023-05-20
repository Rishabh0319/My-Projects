import React from 'react';
import {TbGridDots} from 'react-icons/tb';

const ProfileIcons = () => {
  return (
    <div className='profile-icon-cont'>
       <span><TbGridDots size={25} color='#5f6368'/></span> 
       <span className='profile'><img src='https://lh3.google.com/u/0/ogw/AOLn63H0P9mZLWcqdD_ahUhstHLlvpF0fOfX1IDXIviD=s32-c-mo' alt="profile-image" /></span>
    </div>
  )
}

export default ProfileIcons