import React from 'react'
import Link from 'next/link'
import { IoSearchOutline, IoMenuOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <Link href='/'><h1>ola</h1></Link>
        
        <ul className="app__nav_links">
            <li>HOME</li>
            <li>FASHION</li>
            <li>TRAVEL</li>
            <li>FEATURES</li>
            <li>ABOUT</li>
        </ul>
        <div className="app__nav_icons">
            <IoSearchOutline className='icon'/>
            <IoMenuOutline className='icon'/>
        </div>
    </div>
  )
}

export default Navbar