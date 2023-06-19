import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';


const RatingDetail = () => {

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
        <div>
            <div style={{ padding: '10px 0' }}>
                {
                    data.map((d) => (
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating name="read-only" value={d.rating} readOnly />
                        </Box>
                    ))
                }
            </div>
        </div>
    )
}

export default RatingDetail
