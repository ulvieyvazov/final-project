import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='first-section-image'>
                        <div className="first-section-text-parent">
                            <div className='first-section-text'>
                                <div className="big">
                                    Big choice of
                                    <br />
                                    Plumbing products
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam pharetra laoreet dui quis molestie.</p>

                                <a href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='first-section-image2'>
                        <div className="first-section-text-parent">
                            <div className='first-section-text'>
                                <div className="big">
                                    Screwdrivers
                                    <br />
                                    Professional Tools                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam pharetra laoreet dui quis molestie.</p>

                                <a href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='first-section-image3'>
                        <div className="first-section-text-parent">
                            <div className='first-section-text'>
                                <div className="big">
                                    One more
                                    <br />
                                    Unique header                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam pharetra laoreet dui quis molestie.</p>

                                <a href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
