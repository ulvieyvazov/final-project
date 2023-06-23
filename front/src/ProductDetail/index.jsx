// import { Box, Rating } from '@mui/material'
import { Box, Rating } from '@mui/material';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Description from '../components/ShopData/Description';

const ProductDetail = ({addToCart}) => {

  const navigate = useNavigate()
  const { id: params } = useParams();
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState([])

  

  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/products/${params}`)
    setData(res.data)
  }

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: 1 }])
  // }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='detail-container'>
      <div className='detail-parent'>
        <div className='detail-top'>
          {
            <div className='featured-card'>
              <div style={{ width: '50%' }}>
                {/* <img src={data.img} alt="" /> */}
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >

                  <SwiperSlide><img src={data.img} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={data.detailimg} alt="" /></SwiperSlide>

                </Swiper>
              </div>

              <div className="featured-card-text">
                <h2>{data.name}</h2>

                <div className="reviews">
                  <div style={{ padding: '10px 0' }}>
                    <Box
                      sx={{
                        '& > legend': { mt: 5 },
                      }}
                    >
                      <Rating name="read-only" value={data.rating} readOnly />
                    </Box>
                  </div>
                  <span style={{ fontSize: '16px', color: '#b3b3b3' }}>{data.reviews} Reviews</span>
                </div>

                <div className='descrip'>
                  {data.description}
                </div>

                <div className='availability'>
                  <p>Availability: <span style={{ color: 'green' }}>{data.availability}</span></p>
                  <p>Brand: {data.brand}</p>
                  <p>SKU: {data.sku}</p>
                </div>

                <div style={{ display: "flex", gap: '20px', alignItems: 'center' }}>

                  {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                  {data.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '16px' }}>${data.price}.00</h3> : <h3>${data.price}.00</h3>}

                  {data.discount ? <h3 style={{ color: 'red', fontSize: '34px' }}>${data.discount}.00</h3> : ""}
                </div>

                <div className='shpo-addtocart'>
                  <button onClick={()=> addToCart(data)}>Add to cart</button>
                  icon
                </div>
              </div>



              {/* <div>
              <div className="new-absolute">
                {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
              </div>
              <div className="hot-absolute">
                {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
              </div>
              <div className="sale-absolute">
                {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
              </div>
            </div> */}

            </div>
          }
        </div>

        <div className='detail-bottom'>

          <div className='detail-bottom-head' key={data._id}>
            <a href="" onClick={() => navigate(`/shop/product-details/${data._id}/description`)}>Description</a>
            {/* <h1>Product Full Description</h1> */}
            {/* <p>{data.fulldisc?.productfulldisc}</p> */}
            <a href="" onClick={() => navigate(`/shop/product-details/${data._id}/specification`)} style={{ margin: '0 20px' }}>Specification</a>
            <a href="/">Reviews</a>
          </div>

          <div className='detail-bottom-text'>
            <div className='description'>

            </div>

            <div className='specification'>
            </div>


            <div className='reviews'>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
