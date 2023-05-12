import React from 'react'
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlist from './Playlist';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="top__links">
        <div className="logo">
          <img className='logo_img' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png" alt="Spotify" />
        </div>
        <ul>
          <li>
            <MdHomeFilled /> <span>Home</span>
          </li>
          <li>
            <MdSearch /> <span>Search</span>
          </li>
          <li>
            <IoLibrary /> <span>Your Library</span>
          </li>
        </ul>
      </div>
        <Playlist/>
    </div>
  )
}

export default Sidebar