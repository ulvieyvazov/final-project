// import { Box, Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {


  const {id: params} = useParams();
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
    <div>
      <div className='featured-card'>
        <img src={data.img} alt=""/>

      </div>
    </div>
  )
}

export default ProductDetail