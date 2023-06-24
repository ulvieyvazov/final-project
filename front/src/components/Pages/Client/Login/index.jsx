import React, { useState } from 'react'
import "./index.scss"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {


    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const updateName = e => {
        const fieldName = e.target.name
        setdata(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    console.log(data);

    const handlePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                navigate('/')

            })
            .catch(res => console.log(res.data))
    }

    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Login</h1>


                <form action="" onSubmit={handlePost}>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input type='email' name='email' onChange={updateName} placeholder='Enter email'/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" name='password' onChange={updateName} placeholder='Password' />
                    </div>

                    <button  type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
