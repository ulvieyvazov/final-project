// import { Box, Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./index.scss"
import RatingDetail from '../components/RatingDetail'


const ProductDetail = () => {


  const { id: params } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/products/${params}`)
    setData(res.data)
  }
  console.log(params._id);


  useEffect(() => {
    getData()
  }, [])

  
  return (
    <div className='detail-container'>
      <div className='detail-parent'>
        <div className='detail-top'>
          {
            <div className='featured-card'>
              <img src={data.img} alt="" />

              <div className="featured-card-text">
                <h2>{data.name}</h2>

                <div className="reviews">
                  <RatingDetail/>                  
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

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
