import React, { useState } from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {

    const [datas, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...datas, [input.name]: input.value });
    };

    const handleLoginAuth = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            let { data } = await axios.post("http://localhost:8000/api/users/login", datas, {
                withCredentials: true,
            });
            setError(data.errors);
            console.log(data);
            if (data && data.data.isAdmin) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) {
                        setLoading(false);
                    } else if (password) {
                        setLoading(false);
                    }
                } else {
                    navigate("/admin");
                    setLoading(false);
                }
            }
            else if (data && !data.data.isAdmin) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) {
                        setLoading(false);
                    } else if (password) {
                        setLoading(false);
                    }
                } else {
                    navigate("/");
                    setLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Login</h1>


                <form action="" onSubmit={handleLoginAuth}>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input type='email' name='email' onChange={handleChange} value={datas.email} placeholder='Enter email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" name='password' onChange={handleChange} value={datas.password} placeholder='Password' />
                        {error && <div>Email or Password invalid</div>}
                    </div>

                    <button type="submit" onClick={()=> navigate('/')}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
