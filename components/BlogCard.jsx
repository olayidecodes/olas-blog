import React from 'react'
import Link from 'next/link'

import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa"

const BlogCard = ({title, author, content, coverPhoto, datePublished, slug}) => {
    
    return (
    <div className="app__blogcard">
        <Link href={'/posts/'+ slug}>
            <div className="imgContainer">
                {coverPhoto ? (
                <img src={coverPhoto.url} alt="" width={300} className="image"/>
                ) : "Picture not found"}
            </div>
        </Link>

        <div className="text">
            <h2>{title}</h2>

            <div className="author">
                <h6>BY {author.name}</h6>
                <h6>{datePublished}</h6>
            </div>

            <p>{content.text.substring(0, 250)}...</p>

            <div className="share">
                <p>SHARE</p>
                <div className="icons">
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaPinterest /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard