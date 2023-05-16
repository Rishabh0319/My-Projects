import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayerControle from './PlayerControle'

const Footer = () => {
  return (
    <div className='footer-container'>
      <CurrentTrack/>
      <PlayerControle/>
    </div>
  )
}

export default Footer