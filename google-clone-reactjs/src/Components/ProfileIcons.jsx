import React from 'react';
import {TbGridDots} from 'react-icons/tb';

const ProfileIcons = () => {
  return (
    <div className='profile-icon-cont'>
       <span><TbGridDots size={25} color='#5f6368'/></span> 
       <span className='profile'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/512px-Eo_circle_light-blue_white_letter-r.svg.png?20200417150501' alt="profile" /></span>
    </div>
  )
}

export default ProfileIcons