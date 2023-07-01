import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { Box, Rating } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AiFillHeart } from "react-icons/ai";
import Slider, { Range } from 'rc-slider';



const Shop = ({ addToCart, addToWis }) => {

    const [age, setAge] = React.useState('');
    const [filter, setFilter] = useState(0)

    useEffect(() => {
        if (filter === 0) {

        }

    }, [filter])

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const navigate = useNavigate()
    const [sort, setSort] = useState('sorting')
    const [value, setValue] = useState("")
    const [data, setData] = useState([])


    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data.filter((item) => item.name.toLowerCase().includes(value.toLocaleLowerCase())))
    }


    const handleSortA = () => {
        let sortData = []

        sortData = [...data].sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        setData(sortData)
    }

    const handleSortZ = () => {
        let sortData = []

        sortData = [...data].sort((a, b) => {
            return b.name.localeCompare(a.name)
        })

        setData(sortData)
    }


    const handleSortPrice = () => {
        let sortData = []

        sortData = [...data].sort((a, b) => {
            return (a.discount ? a.discount - b.price : a.price - b.price)
        })

        setData(sortData)
    }


    const handleSortPriceH = () => {
        let sortData = []

        sortData = [...data].sort((a, b) => {
            return (b.discount ? b.discount - a.price : b.price - a.price)
        })

        setData(sortData)
    }


    useEffect(() => {
        getData()
    }, [value])

    return (
        <div className='shop-container'>
            <div className='shop-parent'>
                <div className='shop-left'>

                </div>

                <div className='shop-right'>
                    <div className='shop-right-head'>



                        <Box sx={{ minWidth: 1 }} className='aa'>
                            <FormControl fullWidth style={{ width: '180px', height: '30px' }}>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    style={{ height: '50px' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={handleSortA}>sort by name(A-Z)</button></MenuItem>
                                    <MenuItem value={20}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={handleSortZ}>sort by name(Z-A)</button></MenuItem>
                                    <MenuItem value={30}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={getData}>Default</button></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box sx={{ minWidth: 1 }} className='aa'>
                            <FormControl fullWidth style={{ width: '180px', height: '30px' }}>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    style={{ height: '50px' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={handleSortPrice}>Lowest price</button></MenuItem>
                                    <MenuItem value={20}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={handleSortPriceH}>The highest price</button></MenuItem>
                                    <MenuItem value={30}><button style={{ backgroundColor: "transparent", border: 0 }} onClick={getData}>Default</button></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* <button style={{ padding: '5px 15px', cursor: 'pointer' }} onClick={handleSortPrice}>sort by price</button> */}

                        <div className='shop-search' style={{ display: 'flex' }}>
                            <input type="text" placeholder='Search Product' value={value} onChange={(e) => setValue(e.target.value)} />
                            <IoMdSearch className='shop-icon' />
                        </div>
                    </div>

                    <div className='shop-card-parent'>
                        {
                            data.map((d) => (
                                <div className='featured-card' key={d._id}>
                                    <img src={d.img} alt="" onClick={() => navigate(`product-details/${d._id}`)} />

                                    <div className="featured-card-text">
                                        <p>{d.name}</p>

                                        <div className="reviews">
                                            <div style={{ padding: '10px 0' }}>
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 5 },
                                                    }}
                                                >
                                                    <Rating name="read-only" value={d.rating} readOnly />
                                                </Box>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: '20px' }}>

                                            {/* {d.discount ? <h3 style={{display: "none", fontSize: }}>${d.price}.00</h3> : } */}
                                            {d.discount ? <h3 style={{ textDecorationLine: "line-through", fontSize: '14px' }}>${d.price}.00</h3> : <h3>${d.price}.00</h3>}

                                            {d.discount ? <h3 style={{ color: 'red', fontSize: '20px' }}>${d.discount}.00</h3> : ""}
                                        </div>

                                    </div>
                                    <div>
                                        <div className="new-absolute">
                                            {d.innovation === "new" ? <h4 style={{ backgroundColor: "blue", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="hot-absolute">
                                            {d.innovation === "hot" ? <h4 style={{ backgroundColor: "#010190", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                        <div className="sale-absolute">
                                            {d.innovation === "sale" ? <h4 style={{ backgroundColor: "red", color: "white", textTransform: "uppercase", fontSize: "12px", padding: "3px", width: '38px', textAlign: "center" }}>{d.innovation}</h4> : ""}
                                        </div>
                                    </div>

                                    <div className='btt'>
                                        <button onClick={() => addToCart(d)}>Add to cart</button>

                                    </div>

                                    <button onClick={() => addToWis(d)} className="wish"><AiFillHeart style={{ fontSize: '25px' }} className="wh" /></button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Shop
