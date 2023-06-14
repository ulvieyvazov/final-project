import axios from "axios"

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function NewsSwiper() {

    const [data, setDate] = useState([])


    const getData = async () => {
        const res = await axios.get("http://localhost:5050/news")
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
                            <div className='home-news-card'>
                                <img src={d.img} alt="" />
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
