import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useStateProvider } from '../utils/StateProvider';

const Navbar = () => {

  const [{ userInfo }] = useStateProvider();

  return (
    <div className='navbar-container'>
      <div className="search-bar">
         <FaSearch/>
         <input type='text' placeholder='Artistes, songs, or podcasts'/>
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile/>
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar