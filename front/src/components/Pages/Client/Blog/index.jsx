import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"




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
