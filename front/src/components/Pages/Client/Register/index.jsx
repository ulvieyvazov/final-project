import React, { useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const navigate = useNavigate()

    const [data, setdata] = useState({
        username: "",
        email: "",
        password: ""
    })

    const updateName = e => {
        const fieldName = e.target.name
        setdata(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    const handlePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/users', data)
            .then(res => navigate('/login'))
            .catch(res => console.log(res.data))
    }

    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Register</h1>


                <form action="" onSubmit={handlePost}>
                    <div>
                        <label htmlFor="">User Name</label> <br />
                        <input type="text" name="username" value={data.username} onChange={updateName} placeholder='User name' />
                    </div>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input placeholder='Enter email' value={data.email} onChange={updateName} type='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" name="password" value={data.password} onChange={updateName} placeholder='Password' />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
