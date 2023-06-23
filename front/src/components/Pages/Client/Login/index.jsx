import React from 'react'
import "./index.scss"

const Login = () => {
    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Login</h1>


                <form action="">
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input placeholder='Enter email' type='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="text" placeholder='Password' />
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
