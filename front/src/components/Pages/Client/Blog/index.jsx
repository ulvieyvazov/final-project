import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import post1 from "../../../../assets/post-1.jpg"
import post2 from "../../../../assets/post-2.jpg"
import post3 from "../../../../assets/post-3.jpg"
import post4 from "../../../../assets/post-4.jpg"
import post5 from "../../../../assets/post-5.jpg"
import post6 from "../../../../assets/post-6.jpg"
import post7 from "../../../../assets/post-7.jpg"
import post8 from "../../../../assets/post-8.jpg"
import post9 from "../../../../assets/post-9.jpg"
import post10 from "../../../../assets/post-10.jpg"



const Blog = () => {

    const [data, setDate] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/news")
        setDate(res.data)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className='blog-container'>
            <div className='blog-parent'>

                <h1>Latest News</h1>

                <div className='blog-left'>
                    {
                        data.map((d) => (
                            <div className='post-left1'>
                                <img src={d.img} alt="" />

                                <div className='post-left1-text'>
                                    <span>{d.info}</span>
                                    <span>{d.date}</span>

                                    <h3>{d.title}</h3>
                                    <p> {d.disc}</p>

                                    <button>Read More</button>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='blog-right'>

                </div>
            </div>
        </div>
    )
}

export default Blog
