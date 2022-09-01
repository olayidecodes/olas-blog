import Image from 'next/image'
import React from 'react'
import bg from '../public/assets/bg.jpg'
import two from '../public/assets/2.jpg'
import three from '../public/assets/3.jpg'
import four from '../public/assets/4.jpg'
import five from '../public/assets/5.jpg'
import six from '../public/assets/6.jpg'
import seven from '../public/assets/7.jpg'
import eight from '../public/assets/8.jpg'
import nine from '../public/assets/9.jpg'
import ten from '../public/assets/10.jpg'
import eleven from '../public/assets/11.jpg'
import twelve from '../public/assets/12.jpeg'

import { FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaSnapchatGhost,
    FaPinterest,
    FaYoutube,
    FaRss } from 'react-icons/fa'

const Quoter = () => {
    return(
        <div className="quoter">
            <Image src={two} width={450} height={300} alt="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h1>Jane May</h1>
        </div>
    )
}

const PictureCard = ({text, img}) => {
    return(
        <div className="picture_card">
            <Image src={img} width={450} height={240} alt="quote" className='image'/>
            <p>{text}</p>
        </div>
    )
}

const LatestPost = ({title, date, img}) => {
    return(
        <div className="latest_post">
            <Image src={img} width={60} height={50} alt="quote" className='image'/>
            <div className="text">
                <h6>{title}</h6>
                <p>{date}</p>
            </div>
        </div>
    )
}

const Grid = () => {
    return(
        <div className="grid">
            <div className="text">
                <hr />
                <p>INSTAGRAM</p>
                <hr />
            </div>
            <div className="images">
                <Image src={nine} width={50} height={50} alt="Grid Image"/>
                <Image src={ten} width={50} height={50} alt="Grid Image"/>
                <Image src={eleven} width={50} height={50} alt="Grid Image"/>
                <Image src={twelve} width={50} height={50} alt="Grid Image"/>
                <Image src={bg} width={50} height={50} alt="Grid Image"/>
                <Image src={two} width={50} height={50} alt="Grid Image"/>
                <Image src={three} width={50} height={50} alt="Grid Image"/>
                <Image src={eight} width={50} height={50} alt="Grid Image"/>
                <Image src={seven} width={50} height={50} alt="Grid Image"/>

            </div>
            
        </div>
    )
}

const Socials = () => {
    return(
        <div className="grid socials">
            <div className="text">
                <hr />
                <p>FOLLOW ME</p>
                <hr />
            </div>
            <div className='socials_links'>
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaInstagram /></span>
                <span><FaSnapchatGhost /></span>
                <span><FaPinterest /></span>
                <span><FaYoutube /></span>
                <span><FaRss /></span>
            </div>
            
        </div>
    )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Quoter />
      <PictureCard img={three} text='Like Page'/>
      <div className="latest_posts">
        <LatestPost img={six} title='Hollywood Style Segments' date='MAY 20, 2018'/>
        <LatestPost img={seven} title='Tangerine Floral Dress' date='MAY 14, 2018'/>
        <LatestPost img={eight} title='Peachy Palette Makeup' date='JULY 20, 2020'/>
      </div>
      <Grid />
      <Socials />
      <PictureCard img={four} text='Lifestyle'/>
      <PictureCard img={five} text='Destination'/>
    </div>
  )
}

export default Sidebar
