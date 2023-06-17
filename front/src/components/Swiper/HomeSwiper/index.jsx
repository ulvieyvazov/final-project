import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Pagination } from "swiper";
import axios from "axios";

export default function HomeSwiper() {

    const [value, setValue] = React.useState(2);
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data)
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
                    data.map((d) => (
                        <SwiperSlide>
                            <div className='featured-card'>
                                <img src={d.img} alt="" />

                                <div className="featured-card-text">
                                    <p>{d.name}</p>
                                    <div style={{ padding: '10px 0' }}>
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 5 },
                                            }}
                                        >
                                            <Rating name="read-only" value={d.rating} readOnly />
                                        </Box>
                                    </div>
                                    <div style={{display: "flex", gap: '20px'}}>
                                        <h3>${d.price}.00</h3>
                                        <h3 style={{color: 'red'}}>${d.discount}.00</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}   
