import React from 'react';
import HomeHeader from './HomeHeader.jsx';
import logo from '../assets/google-logo.png';
import SearchInput from './SearchInput.jsx';
import Footer from '../Components/Footer.jsx';

const Home = () => {
  return (
    <div className='home-cont'>
      <HomeHeader />
      <main className='home-main'>
        <img src={logo} alt="logo" />
        <SearchInput />
        <div className="search-buttons-frame">
          <button className='home-search-btn home-btn'>Google Search</button>
          <button className='home-feeling-lucky-btn home-btn'>I'm Feeling Lucky</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home