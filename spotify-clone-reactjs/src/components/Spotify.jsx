import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider.jsx';
import { reducerCases } from '../utils/Constants'

const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider();

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
        <div className="body">
          <Navbar />
          <div className="body__contents">
            <Body />
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