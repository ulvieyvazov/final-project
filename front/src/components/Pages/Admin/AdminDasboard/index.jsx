import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Admin = () => {


  const navigate = useNavigate()
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='admin-das-container'>
      <div className='admin-das-parent'>
        <div className='admin-das-header'>
          <div className='admin-das-head'>
            <ul>
              <li onClick={()=> navigate('/adminhome')}>Dashboard</li>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">All</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  style={{backgroundColor: '#d1cfcf', height: '40px'}}
                >
                  <MenuItem value={10} onClick={()=> navigate("/adminproducts")}>All-Products</MenuItem>
                  <MenuItem value={20} onClick={()=> navigate("/adminnews")}>All-News</MenuItem>
                  <MenuItem value={30} onClick={()=> navigate("/admincomment")}>All-Comment</MenuItem>
                  <MenuItem value={40} onClick={()=> navigate("/adminmessage")}>All-Message</MenuItem>
                </Select>
              </FormControl>
              <li onClick={()=> navigate('/adminorder')}>Orders</li>
              <li style={{marginLeft: '79px'}} onClick={()=> navigate('/')}>Logout</li>
            </ul>
          </div>
        </div>
        {/* <form style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={() => navigate('/adminproducts')}>Product</button>
          <button onClick={() => navigate('/adminnews')}>News</button>
        </form> */}
      </div>
    </div>
  )
}

export default Admin

