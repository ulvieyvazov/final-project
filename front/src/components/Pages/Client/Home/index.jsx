import React, { useEffect, useState } from 'react'
import "./index.scss"
import SwiperCorusel from '../../../Swiper/app'
import NewsSwiper from '../../../Swiper/News/index'
// import BackToTopButton from '../../../BackToTopButton'
import HomeSwiper from '../../../Swiper/HomeSwiper'
import axios from 'axios'
import { Box, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai";




const Home = ({addToCart, addToWis}) => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='home-container'>
            <div className='home-parent'>
                <SwiperCorusel />     


                <div className='home-about'>
                    <div className='home-free'>

                        <a href="/">
                            <img src="https://808401.selcdn.ru/koleso-oz/iblock/16e/free_delivery.png" alt="" />
                        </a>

                        <div className='home-free-child'>
                            <p>
                                Free Shipping
                            </p>
                            <span>For orders from $50</span>
                        </div>
                    </div>


                    <div className='home-free'>

                        <a href="/">
                            <img src="https://www.vademecumitalia.com/wp-content/uploads/2015/02/24h.png" alt="" />
                        </a>

                        <div className='home-free-child'>
                            <p>
                                Support 24/7
                            </p>
                            <span>Call us anytime</span>
                        </div>
                    </div>


                    <div className='home-free'>

                        <a href="/">
                            <img src="https://img.freepik.com/premium-vector/document-with-lock-line-icon-file-management-restricted-access-privacy-personal-data-private-information-secret-archive-documentation-business-concept-glassmorphism-style_661108-3187.jpg?w=740" alt="" />
                        </a>

                        <div className='home-free-child'>
                            <p>
                                100% Safety
                            </p>
                            <span>Only secure payments</span>
                        </div>
                    </div>



                    <div className='home-free'>

                        <a href="/">
                            <img style={{ height: '73px' }} src="https://cdn.pixabay.com/photo/2013/07/13/10/15/plaque-156857_1280.png" alt="" />
                        </a>

                        <div className='home-free-child'>
                            <p>
                                Hot Offers
                            </p>
                            <span>Discounts up to 90%</span>
                        </div>
                    </div>

                </div>


                <div className='featured-parent'>
                    <div className='featured'>
                        <h3>Featured Products</h3>
                        <div></div>
                    </div>



                    <div className='featured-card-parent'>
                        <HomeSwiper addToCart={addToCart} addToWis={addToWis} />
                    </div>
                </div>


                <div className='hundreds-parent'>
                    <div className="hundreds">
                        <div className='hundreds-text'>
                            <h2>Hundreds  Hand Tools</h2>
                            <p>Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</p>

                            <a href="/">Shop Now</a>
                        </div>
                    </div>
                </div>


                <div className='bestsellers-parent'>
                    <div className='featured'>
                        <h3>Bestsellers</h3>
                        <div></div>
                    </div>

                    <div className='bestsellers-card-parent'>
                        {
                            data.map((d) => (
                                (d.rating >= 4 ? <div className='featured-card'>
                                    <img src={d.img} alt="" onClick={()=> navigate(`product-details/${d._id}`)} key={d._id}/>

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '10px 0' }}>
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 5 },
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>
                                    <button onClick={()=> addToCart(d)} className="add">Add To Cart</button>
                                <button onClick={()=> addToWis(d)} className="wish"><AiFillHeart style={{fontSize: '25px'}} className="wh"/></button>
                                </div> : "")
                            ))
                        }
                    </div>

                </div>

                <div className='home-popular'>
                    <div className='featured'>
                        <h3>Popular Categories</h3>
                        <div></div>
                    </div>

                    <div className='home-popular-card-parent'>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-1.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Power Tools</h4>
                                <ul>
                                    <li>Drills & Mixers</li>
                                    <li>Cordless Screwdrivers</li>
                                    <li>Screwdrivers</li>
                                    <li>Wrenches</li>
                                    <li>Grinding Machines</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-2.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Hand Tools</h4>
                                <ul>
                                    <li>Kits</li>
                                    <li>Hammers</li>
                                    <li>Spanners</li>
                                    <li>Handsaws</li>
                                    <li>Paint Tools</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-3.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Machine Tools</h4>
                                <ul>
                                    <li>Lathes</li>
                                    <li>Milling Machines</li>
                                    <li>Grinding Machines</li>
                                    <li>CNC Machines</li>
                                    <li>Sharpening Machines</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-4.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Power Machinery</h4>
                                <ul>
                                    <li>Generators</li>
                                    <li>Compressors</li>
                                    <li>Winches</li>
                                    <li>Plasma Cutting</li>
                                    <li>Electric Motors</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-5.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Measurement</h4>
                                <ul>
                                    <li>Tape Measure</li>
                                    <li>Theodolites</li>
                                    <li>Thermal Imagers</li>
                                    <li>Calipers</li>
                                    <li>Levels</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>
                        <div className="home-popular-card">
                            <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-6.jpg" alt="" />
                            <div className='home-popular-text'>
                                <h4>Clothes and PPE</h4>
                                <ul>
                                    <li>Winter Workwear</li>
                                    <li>Summer Workwear</li>
                                    <li>Helmets</li>
                                    <li>Belts and Bags</li>
                                    <li>Work Shoes</li>
                                </ul>

                                <div onClick={()=> navigate('/shop')}>Show All</div>
                            </div>
                        </div>


                    </div>
                </div>



                <div className='new-arrivals-parent'>
                    <div className='featured'>
                        <h3>New Arrivals</h3>
                        <div></div>
                    </div>

                    <div className='new-arrivals-card-parent'>
                        {
                            data.map((d) => (
                                (d.innovation === "new" ? <div className='featured-card'>
                                    <img src={d.img} alt="" onClick={()=> navigate(`product-details/${d._id}`)} key={d._id}/>

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '10px 0' }}>
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 5 },
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>

                                    <button onClick={()=> addToCart(d)} className="add">Add To Cart</button>
                                <button onClick={()=> addToWis(d)} className="wish"><AiFillHeart style={{fontSize: '25px'}} className="wh"/></button>
                                </div> : "")
                            ))
                        }
                    </div>
                </div>



                <div className='home-news'>
                    <div className='featured'>
                        <h3>Latest News</h3>
                        <div></div>
                    </div>


                    <div className='home-news-card-parent'>
                        <NewsSwiper />
                    </div>

                </div>


                <div className='home-end-parent'>

                    <div className='home-end'>
                        <div className='featured'>
                            <h3>Top Rated Products</h3>
                            <div></div>
                        </div>

                        {
                            data.map((d) => (
                                (d.reviews >= 15 ? <div className='featured-card'>
                                    <img src={d.img} alt="" />

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '8px 0' }}>
                                                <Box

                                                    sx={{
                                                        '& > legend': { mt: 5 }
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>

                                </div> : "")
                            ))
                        }


                    </div>


                    <div className='home-end'>
                        <div className='featured'>
                            <h3>Special Offers</h3>
                            <div></div>
                        </div>

                        {
                            data.map((d) => (
                                (d.discount ? <div className='featured-card'>
                                    <img src={d.img} alt="" />

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '8px 0' }}>
                                                <Box

                                                    sx={{
                                                        '& > legend': { mt: 5 }
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>

                                </div> : "")
                            ))
                        }

                    </div>



                    <div className='home-end'>
                        <div className='featured'>
                            <h3>Bestsellers</h3>
                            <div></div>
                        </div>

                        {
                            data
                            .filter((s) => s.price > 900)
                            .map((d) => (
                                (d.rating >= 4 ? <div className='featured-card'>
                                    <img src={d.img} alt="" />

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '8px 0' }}>
                                                <Box

                                                    sx={{
                                                        '& > legend': { mt: 5 }
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>

                                </div> : "")
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home