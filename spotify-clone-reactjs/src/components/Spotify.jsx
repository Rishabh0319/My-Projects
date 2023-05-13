import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import axios from 'axios';
import { useStateProvider } from '../utils/StateProvider.jsx';
import { reducerCases } from '../utils/Constants'

const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider();

  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios('https://api.spotify.com/v1/me',
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
      // console.log(data);

      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      }

      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className='container'>
      <div className="spotify__body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="body__contents">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Spotify