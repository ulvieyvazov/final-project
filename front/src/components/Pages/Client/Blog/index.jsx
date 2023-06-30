import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import { BsSearch } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaRss } from "react-icons/fa";
// import Accordions from '../../../Accordions/index';
import { useNavigate } from 'react-router-dom';


const Blog = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [data, setDate] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:4040/news")
        setDate(res.data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())));
    };
    


    useEffect(() => {
        getData()
    }, [value])



    return (
        <div className='blog-container'>
            <div className='blog-parent'>


                <div className='blog-left'>
                    <h1>Latest News</h1>
                    {
                        data.map((d) => (
                            <div className='post-left1' key={d._id}>
                                <img src={d.img} alt="" onClick={() => navigate(`morenews/${d._id}`)} />

                                <div className='post-left1-text'>
                                    <span>{d.info}</span>
                                    <span>{d.date}</span>

                                    <h3>{d.title}</h3>
                                    <p> {d.disc}</p>

                                    <button onClick={() => navigate(`morenews/${d._id}`)}>Read More</button>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='blog-right'>
                    <div className='blog-right-input'>
                        <input type="text" placeholder='Blog search' value={value} onChange={(e) => setValue(e.target.value)} />
                        <BsSearch className='icon-se' />
                    </div>

                    <div className='about-blog'>
                        <h3>About Blog</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>

                        <div className='footer-social'>
                            <div className='facebook'>
                                <a href="https://www.facebook.com/" target='_blank'><FaFacebookF className='footer-social-icon' /></a>
                            </div>
                            <div className='twit'>
                                <a href="https://twitter.com/" target='_blank'><AiOutlineTwitter className='footer-social-icon' /></a>

                            </div>
                            <div className='yout'>
                                <a href="https://www.youtube.com/" target='_blank'><AiFillYoutube className='footer-social-icon' /></a>
                            </div>
                            <div className='insta'>
                                <a href="https://www.instagram.com/" target='_blank'><AiFillInstagram className='footer-social-icon' /></a>
                            </div>
                            <div className='rss'>
                                <a href="https://rss.com/" target='_blank'><FaRss className='footer-social-icon' /></a>
                            </div>
                        </div>
                    </div>


                    <div className='blog-latest'>
                        <h3>Latest Post</h3>

                        <div className='latest-cardd-parent'>
                            {
                                data
                                    .filter((f) => (
                                        f._id !== ("64897a2f8f745cb96a21c85d" && "64897a818f745cb96a21c85f")
                                    ))
                                    .map((d) => (
                                        <div className='latest-cardd'>
                                            <img src={d.img} alt="" />

                                            <div className='latest-api'>
                                                <p>{d.title}</p>
                                                <span>{d.date}</span>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
