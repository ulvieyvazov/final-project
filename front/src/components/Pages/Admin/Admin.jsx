import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {


  const navigate = useNavigate()

  return (
    <div className='register-container'>
      <div className='register-parent'>
        <form style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={() => navigate('/adminproducts')}>Product</button>
          <button onClick={() => navigate('/adminnews')}>News</button>
        </form>
      </div>
    </div>
  )
}

export default Admin
