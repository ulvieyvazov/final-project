import React from 'react'
import "./index.scss"

const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-parent'>
                <h1>Register</h1>


                <form action="">
                    <div>
                        <label htmlFor="">User Name</label> <br />
                        <input type="text" placeholder='User name' />
                    </div>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input placeholder='Enter email' type='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label> <br />
                        <input type="text" placeholder='Password' />
                    </div>

                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
