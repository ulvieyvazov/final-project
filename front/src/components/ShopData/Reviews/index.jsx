import React, { useEffect, useState } from 'react'
import "./index.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Rating } from '@mui/material'
import { CommentSchema } from '../../../ProductSchema/CommentSchema'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ProductDetail from '../../../ProductDetail'
import HomeSwiper from "../../Swiper/HomeSwiper/index"

const Reviews = ({ addToCart }) => {

  const params = useParams()
  const [data, setData] = useState([])
  const [datac, setDatac] = useState([])
  const [searchString, setSearchString] = useState();


  // const getData = async () => {
  //   const res = await axios.get(`http://localhost:1000/comment/${params.id}`)
  //   setData(res.data)
  // }
  const getDatac = async () => {
    const res = await axios.get(`http://localhost:1000/comment`)
    setData(res.data)
  }

  const [state, setState] = useState({
    name: "",
    // rating: "",
    comment: "",
    email: "",
    idComment: "",
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

    await axios.post(`http://localhost:1000/comment`, {
      name: values.name,
      // rating: values.rating,
      comment: values.comment,
      email: values.email,
      idComment: params.id
    })

    await getDatac()

  }

  useEffect(() => {
    getDatac()
  }, [])


  var createdAt = data.createdAt
  var date = new Date(createdAt)
  console.log(date)



  return (
    <>
      <ProductDetail addToCart={addToCart} />
      <div className='reviews-container'>
        <div className='reviews-parent'>
          <div className='reviews'>
            <h1>Customer Reviews</h1>


            <div className='reviews-top'>
              {
                data.map((d) => (
                  d.idComment === params.id ? <div className='reviews-div'>
                    <p>{d.comment}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                      <h3>{d.name}</h3>
                      {
                        new Date(d.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                      }
                    </div>
                    {/* <a href={data.email}>{data.email}</a> */}
                  </div> : ""
                ))

                /* <Box
                  sx={{
                    '& > legend': { mt: 5 },
                  }}
                >
                </Box>
                <Rating name="read-only" value={data.rating} readOnly /> */}
            </div>


            <div className='contact-right'>
              <h3>Write A Review</h3>
              <form action="" onSubmit={handleSubmit(postProduct)}>
                <div className='rew-div' style={{ display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
                  {/* 
                  <div>
                    <select type="option" name='rating' {...register("rating")} onChange={handleChange} value={state.rating}>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                    {errors.rating?.message && (
                      <p style={{ color: "red" }}>{errors.rating?.message}</p>
                    )}
                  </div> */}


                  <div className='contact-input'>
                    <label htmlFor="">Your Name</label> <br />
                    <input type="text" name='name' placeholder='Your Name' {...register("name")} onChange={handleChange} value={state.name} />
                    {errors.name?.message && (
                      <p style={{ color: "red" }}>{errors.name?.message}</p>
                    )}
                  </div>
                  <div className='contact-input'>
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name='email' placeholder='Email' {...register("email")} onChange={handleChange} value={state.email} />
                    {errors.email?.message && (
                      <p style={{ color: "red" }}>{errors.email?.message}</p>
                    )}
                  </div>
                </div>

                {/* <input type="number" max={5} /> */}

                <div className='contact-input' style={{ width: '100%' }}>
                  <label htmlFor="">Message</label> <br />
                  <textarea type="text" name='comment' style={{ width: '95%', height: '120px' }} {...register("comment")} onChange={handleChange} value={state.comment}></textarea>
                  {errors.comment?.message && (
                    <p style={{ color: "red" }}>{errors.comment?.message}</p>
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
