import React, { useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const [success, setsuccess] = useState("")
    const [error, seterror] = useState("")

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', data)
            .then(res => {
                setsuccess(res.data)
                console.log(res.data);
                navigate('/login')
            })
            .catch(errors => seterror(errors))
    }


    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Register</h1>


                <form action="" onSubmit={handleRegister}>
                    <div>
                        {error && <div className="error_msg"><h2>Email already exists</h2></div>}
                        <label htmlFor="">User Name</label> <br />
                        <input type="text" name="username" onChange={handleChange} placeholder='User name' />
                    </div>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input placeholder='Enter email' onChange={handleChange} type='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" autoComplete="current-password" name="password" onChange={handleChange} placeholder='Password' />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
