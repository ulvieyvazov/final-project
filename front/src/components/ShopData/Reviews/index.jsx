import React, { useEffect, useState } from 'react'
import "./index.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Rating } from '@mui/material'
import { CommentSchema } from '../../../ProductSchema/CommentSchema'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ProductDetail from '../../../ProductDetail'

const Reviews = ({ addToCart }) => {

  const params = useParams()
  const [data, setData] = useState([])
  const [searchString, setSearchString] = useState();


  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/products/${params.id}`)
    setData(res.data)
  }

  const [state, setState] = useState({
    reviewsName: "",
    reviewsrating: "",
    reviewsComment: "",
    reviewsEmail: "",
  })
  const [productId, setProductId] = useState("")

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CommentSchema),
  });

  const postProduct = async () => {
    const values = getValues()

    await axios.post(`http://localhost:5050/products/${params.id}`, {
      reviewsName: values.reviewsName,
      reviewsrating: values.reviewsrating,
      reviewsComment: values.reviewsComment,
      reviewsEmail: values.reviewsEmail,
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ProductDetail addToCart={addToCart} />
      <div className='reviews-container'>
        <div className='reviews-parent'>
          <div className='reviews'>
            <h1>Customer Reviews</h1>


            <div className='reviews-top'>
              {
                <div>
                  <h3>{data.reviewsName}</h3>
                  <p>{data.reviewsComment}</p>
                  <Box
                    sx={{
                      '& > legend': { mt: 5 },
                    }}
                  >
                  </Box>
                  <Rating name="read-only" value={data.rating} readOnly />
                </div>
              }
            </div>


            <div className='contact-right'>
              <h3>Write A Review</h3>
              <form action="" onSubmit={handleSubmit(postProduct)}>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
{/* 
                  <div>
                    <select type="option" name='reviewsrating' {...register("reviewsrating")} onChange={handleChange} value={state.reviewsrating}>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                    {errors.reviewsrating?.message && (
                      <p style={{ color: "red" }}>{errors.reviewsrating?.message}</p>
                    )}
                  </div> */}
                  <div className='contact-input'>
                    <label htmlFor="name">Your Name</label> <br />
                    <input type="text" name='reviewsName' placeholder='Your Name' {...register("reviewsName")} onChange={handleChange} value={state.reviewsName} />
                    {errors.reviewsName?.message && (
                      <p style={{ color: "red" }}>{errors.reviewsName?.message}</p>
                    )}
                  </div>
                  <div className='contact-input'>
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name='email' placeholder='Email' {...register("reviewsEmail")} onChange={handleChange} value={state.reviewsEmail} />
                    {errors.reviewsEmail?.message && (
                      <p style={{ color: "red" }}>{errors.reviewsEmail?.message}</p>
                    )}
                  </div>
                </div>

                <div className='contact-input' style={{ width: '100%' }}>
                  <label htmlFor="name">Message</label> <br />
                  <textarea type="text" name='reviewsComment' style={{ width: '95%', height: '120px' }} {...register("reviewsComment")} onChange={handleChange} value={state.reviewsComment}></textarea>
                  {errors.reviewsComment?.message && (
                    <p style={{ color: "red" }}>{errors.reviewsComment?.message}</p>
                  )}
                </div>

                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
