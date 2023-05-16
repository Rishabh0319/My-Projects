import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayerControle from './PlayerControle'
import Volume from './Volume'

const Footer = () => {
  return (
    <div className='footer-container'>
      <CurrentTrack/>
      <PlayerControle/>
      <Volume/>
    </div>
  )
}

export default Footer