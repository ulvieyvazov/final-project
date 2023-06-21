import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { AiFillHeart } from "react-icons/ai";
// import Typography from '@mui/material/Typography';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Pagination } from "swiper";
import axios from "axios";

 function HomeSwiper({ addToCart, addToWis }) {

    // const [value, setValue] = React.useState(2);
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data)
    }


    const deleteData = async (id) => {
        await axios.delete(`http://localhost:5050/products/${id}`)
        await getData()
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.map((d, dIndex) => (
                        <SwiperSlide>
                            <div className='featured-card'>
                                <img src={d.img} alt="" />

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
                                        <span style={{ fontSize: '14px', color: '#b3b3b3' }}>{d.reviews} Reviews</span>
                                    </div>

                                    <div style={{ display: "flex", gap: '20px' }}>

                                        {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                        {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                        {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                    </div>

                                </div>
                                <div className="new-absolute">
                                    {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                </div>
                                <div className="hot-absolute">
                                    {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                </div>
                                <div className="sale-absolute">
                                    {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                </div>
                                {/* <button onClick={() => deleteData(d._id)}>DELETE</button> */}
                                <button onClick={()=> addToCart(d)} className="add">Add To Cart</button>
                                <button onClick={()=> addToWis(d)} className="wish"><AiFillHeart style={{fontSize: '25px'}} className="wh"/></button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}   

export default HomeSwiper