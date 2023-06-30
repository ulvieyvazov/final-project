import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        const res = await axios.get("http://localhost:8000/api/users/login")
        setData(res.data)
        console.log(data[0]);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{width: '70%', margin: '0 auto', padding: '50px 0'}}>
        </div>
    )
}

export default Account
