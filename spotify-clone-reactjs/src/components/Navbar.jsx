import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useStateProvider } from '../utils/StateProvider';

const Navbar = ({ navBackground }) => {

  const [{ userInfo }] = useStateProvider();

  // MY LOGIC (GUGAD)

  const [changeNavBGColor, setChangeNavBackgroundColor] = useState({backgroundColor: 'none'})

  useEffect(() => {
    if (navBackground) {
      setChangeNavBackgroundColor({
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      })
      console.log("color is Change");
    }
    if(!navBackground) {
      setChangeNavBackgroundColor({backgroundColor: 'transparent'})
      console.log("color is Reset");
    }
  }, [navBackground])

  

  // MY LOGIC (GUGAD)

  return (
    <div className='navbar-container' style={changeNavBGColor} navBackground={navBackground}>
      <div className="search-bar">
        <FaSearch />
        <input type='text' placeholder='Artistes, songs, or podcasts' />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )

}


export default Navbar