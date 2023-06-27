import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        const res = await axios.get("http://localhost:8000/api/users/login")
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                <div>
                    <p>{data.name}</p>
                </div>
            }
        </div>
    )
}

export default Account
