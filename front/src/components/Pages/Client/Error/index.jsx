import React from 'react'
import "./index.css"
import { useNavigate } from "react-router-dom"
const Error404 = () => {

  const navigate = useNavigate()
  
  return (
    <div className='error-404-container'>
      <div className='error-404-parent'>
        <div className='error-404'>
          Oops! Error 404
        </div>

        <div className='note-found'>
          <h1>Page Not Found</h1>
          <p>We can't seem to find the page you're looking for.
            <br />
            Try to use the search.</p>

            <span>Or go to the home page to start over.</span> 
            <br />
            <button onClick={()=> navigate("/")}>Go To Home Page</button>
        </div>
      </div>
    </div>
  )
}

export default Error404