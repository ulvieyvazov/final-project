import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Account
