import React from 'react'
import Link from 'next/link'

import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa"

const BlogCard = ({title, author, content, coverPhoto, datePublished, slug}) => {
    
    return (
    <div className="card">
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
                <p>BY {author.name}</p>
                <p>{datePublished}</p>
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