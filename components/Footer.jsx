import React from 'react'
import { FaFacebookF,
     FaTwitter,
     FaInstagram,
     FaSnapchatGhost,
     FaPinterest,
     FaYoutube,
     FaRss } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='app__footer'>
        <ul className='footer-links'>
            <li><FaFacebookF /><h6>FACEBOOK</h6> </li>
            <li><FaTwitter /><h6>TWITTER</h6></li>
            <li><FaInstagram /><h6>INSTAGRAM</h6></li>
            <li><FaSnapchatGhost /><h6>SNAPCHAT</h6></li>
            <li><FaPinterest /><h6>PINTEREST</h6></li>
            <li><FaYoutube /><h6>YOUTUBE</h6></li>
            <li><FaRss /><h6>RSS</h6></li>
        </ul>
    </div>
  )
}

export default Footer