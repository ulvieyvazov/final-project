import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {

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
                navigate('/admin')

            })
            .catch(res => console.log(res.data))
    }

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={handlePost}>
                        <h1>Login to Your Account</h1>
                        <input
                            value={data.email}
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={updateName}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            required
                            onChange={updateName}
                        />
                        <button type="submit">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;