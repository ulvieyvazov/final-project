import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import { BsSearch } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaRss } from "react-icons/fa";



const MoreNews = () => {

    const [data, setDate] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:4040/news")
        setDate(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='more-container'>
            <div className='more-parent'>
                <div className='blog-left'>
                    <h1>Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h1>
                    <div className='post-left1'>
                        <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/posts/post-featured.jpg" alt="" />

                        <div className='post-left1-text'>
                            <div style={{ display: 'flex', flexDirection: "column", gap: 20 }}>
                                <span>Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla vestibulum ipsum risus, vitae maximus nunc bibendum quis.</span>
                                <p style={{ marginBottom: '50px' }}>raesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat risus, at suscipit ipsum diam eget sem. Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex.</p>
                            </div>

                            <div>
                                <h3>Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat. Proin at lectus felis.</h3>
                                <p style={{ textAlign: 'center', paddingBottom: '88px' }}>John Mcarthy</p>

                                <div>Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis, ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc.</div>

                            </div>


                            <div className='more-text' style={{ margin: '40px 0', width: '100%' }}>
                                <h1>Nam Eget Blandit Diam</h1>
                                <p>Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante vitae fringilla rutrum, mi tortor dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.</p>
                                <div>Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna.</div>
                                <div style={{ paddingTop: '15px' }}>Nulla fringilla:<a href="/">Donec aliquet at felis et dignissim</a></div>
                                <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/posts/post-featured.jpg" alt="" />
                                <div style={{ paddingTop: '40px' }}>
                                    <p>Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra.</p>
                                    <p>Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat risus, at suscipit ipsum diam eget sem. Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex.</p>

                                </div>
                            </div>


                            <div className='' style={{paddingTop:'40px'}}>
                                <h1>Nunc Dapibus Varius Ligula</h1>
                                <div style={{paddingBottom: '50px'}}>
                                    <p>Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra. Duis vitae fermentum elit. Integer ac mattis elit.</p>
                                    <p>Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis:</p>
                                </div>

                                <ul>
                                    <li>1.Duis finibus imperdiet ultricies. Donec vel pretium turpis. In auctor euismod posuere.</li>
                                    <li style={{padding: '20px 0'}}>2.Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet.</li>
                                    <li>3.In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat. Proin at lectus felis. Quisque dapibus auctor justo id dictum.</li>
                                </ul>

                                <p style={{paddingTop: '50px'}}>Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.</p>
                            </div>

                            {/* <button>Read More</button> */}
                        </div>
                    </div>

                </div>

                <div className='blog-right'>
                    <div className='blog-right-input'>
                        <input type="text" placeholder='Blog search' />
                        <BsSearch className='icon-se' />
                    </div>

                    <div className='about-blog'>
                        <h3>About Blog</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>

                        <div className='footer-social'>
                            <div className='facebook'>
                                <FaFacebookF className='footer-social-icon' />
                            </div>
                            <div className='twit'>
                                <AiOutlineTwitter className='footer-social-icon' />
                            </div>
                            <div className='yout'>
                                <AiFillYoutube className='footer-social-icon' />
                            </div>
                            <div className='insta'>
                                <AiFillInstagram className='footer-social-icon' />
                            </div>
                            <div className='rss'>
                                <FaRss className='footer-social-icon' />
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

export default MoreNews