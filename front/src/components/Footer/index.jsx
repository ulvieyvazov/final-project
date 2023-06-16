import React from 'react'
import "./index.scss"
import { BiWorld } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaRss } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <div className='footer'>
                    <div className='footer-top'>

                        <div className='footer-contact'>

                            <h5>Contact Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus. </p>

                            <ul>
                                <li>
                                    <BiWorld className='footer-icon' />
                                    715 Fake Street, New York 10021 USA
                                </li>
                                <li>
                                    <AiOutlineMail className='footer-icon' />
                                    stroyka@example.com                                </li>
                                <li>
                                    <FiSmartphone className='footer-icon' />
                                    (800) 060-0730, (800) 060-0730                                </li>
                                <li>
                                    <AiOutlineClockCircle className='footer-icon' />
                                    Mon-Sat 10:00pm - 7:00pm
                                </li>
                            </ul>
                        </div>


                        <div className='footer-info'>

                            <h5>Information</h5>
                            <ul>
                                <a href="/"><li>About Us</li></a>
                                <a href="/"><li>Delivery Information</li></a>
                                <a href="/"><li>Privacy Policy</li></a>
                                <a href="/"><li>Brands</li></a>
                                <a href="/"><li>Contact Us</li></a>
                                <a href="/"><li>Returns</li></a>
                                <a href="/"><li>Site Map</li></a>
                            </ul>
                        </div>


                        <div className='footer-acco'>

                            <h5>My Account</h5>
                            <ul>
                                <a href="/"><li>Store Location</li></a>
                                <a href="/"><li>Order History</li></a>
                                <a href="/"><li>Wish List</li></a>
                                <a href="/"><li>Newsletter</li></a>
                                <a href="/"><li>Specials</li></a>
                                <a href="/"><li>Gift Cards</li></a>
                                <a href="/"><li>Affiliate</li></a>
                            </ul>
                        </div>



                        <div className='footer-new'>

                            <h5>Newsletter</h5>
                            <p>Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.</p>

                            <form action="">
                                <input type="text" placeholder='Email Adress...' />
                                <button>Subscribe</button>
                            </form>

                            <div className='footer-social-parent'>
                                <p className='p'>Follow us on social networks</p>

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
                        </div>


                    </div>

                    <div className='footer-bottom'>
                        <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/payments.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
