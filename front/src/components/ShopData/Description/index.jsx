import React, { useEffect, useState } from 'react'
import ProductDetail from '../../../ProductDetail'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./index.css"

const Description = ({addToCart}) => {

  const params = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/products/${params.id}`)
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ProductDetail addToCart={addToCart} />
      <div>
        {
          <div className='description-container'>
            <div className='description-parent'>
              <h1>Full Description</h1>
              <p>{data.fulldisc?.productfulldisc}</p>
              <h1 style={{paddingTop: '50px'}}>Etiam lacus lacus mollis in mattis</h1>
              <p>{data.fulldisc?.etiam1}</p>
              <p>{data.fulldisc?.etiam2}</p>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Description
