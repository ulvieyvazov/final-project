import axios from "axios"

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

export default function NewsSwiper() {

    const navigate = useNavigate()
    const [data, setDate] = useState([])


    const getData = async () => {
        const res = await axios.get("http://localhost:4040/news")
        setDate(res.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.map((d) => (
                        <SwiperSlide>
                            <div className='home-news-card' key={d._id}>
                                <img src={d.img} alt="" onClick={() => navigate(`morenews/${d._id}`)} />
                                <div className='home-news-card-text'>
                                    <h3>{d.title}</h3>
                                    <span>{d.date}</span>
                                    <p> {d.disc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
        </>
    );
}
