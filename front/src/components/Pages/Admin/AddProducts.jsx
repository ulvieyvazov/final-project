import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from "../../../ProductSchema/ProductSchema"
import { Rating } from '@mui/material';
import "./index.scss"

const AdminProducts = () => {


    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    const [state, setState] = useState({
        name: "",
        price: "",
        discount: "",
        img: "",
        material: "",
        engine: "",
        detailimg: "",
        innovation: "",
        category: "",
        rating: "",
        reviews: "",
        description: "",
        availability: "",
        brand: "",
        sku: "",

    })
    const [productId, setProductId] = useState("")


    const editClick = (ud) => {
        setState({
            name: ud.name,
            price: ud.price,
            discount: ud.discount,
            img: ud.img,
            material: ud.material,
            engine: ud.engine,
            detailimg: ud.detailimg,
            innovation: ud.innovation,
            category: ud.category,
            rating: ud.rating,
            reviews: ud.reviews,
            description: ud.description,
            availability: ud.availability,
            brand: ud.brand,
            sku: ud.sku,
        })

        setProductId(ud._id)
    }


    const updateData = async () => {
        await axios.put(`http://localhost:5050/products/${productId}`, state)
        setState({
            name: "",
            price: "",
            discount: "",
            img: "",
            material: "",
            engine: "",
            detailimg: "",
            innovation: "",
            category: "",
            rating: "",
            reviews: "",
            description: "",
            availability: "",
            brand: "",
            sku: "",
        })
        await getData()
    }

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ProductSchema),
    });

    const postProduct = async () => {
        const values = getValues()

        await axios.post("http://localhost:5050/products", {
            name: values.name,
            price: values.price,
            discount: values.discount,
            img: values.img,
            material: values.material,
            engine: values.engine,
            detailimg: values.detailimg,
            innovation: values.innovation,
            category: values.category,
            rating: values.rating,
            reviews: values.reviews,
            description: values.description,
            availability: values.availability,
            brand: values.brand,
            sku: values.sku,
            // specification: values.specification,
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:5050/products/${id}`);
        await getData();
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='admin-container'>
            <div className="admin-parent">


                <div style={{ width: '100%', display: 'flex' }}>
                    <form action="" style={{ width: '100%', margin: '0 auto' }} onSubmit={handleSubmit(postProduct)}>
                        <Box
                            display={'flex'}
                            flexWrap={'wrap'}
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField id="outlined-basic" label="name" variant="outlined" {...register("name")} onChange={handleChange} value={state.name} />
                                {errors.name?.message && (
                                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="price" variant="outlined" type='number' {...register("price")} onChange={handleChange} value={state.price} />
                                {errors.price?.message && (
                                    <p style={{ color: "red" }}>{errors.price?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="discount" variant="outlined" type='number' {...register("discount")} onChange={handleChange} value={state.discount} />
                                {errors.discount?.message && (
                                    <p style={{ color: "red" }}>{errors.discount?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="img" variant="outlined" {...register("img")} onChange={handleChange} value={state.img} />
                                {errors.img?.message && (
                                    <p style={{ color: "red" }}>{errors.img?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="material" variant="outlined" {...register("material")} onChange={handleChange} value={state.material} />
                                {errors.material?.message && (
                                    <p style={{ color: "red" }}>{errors.material?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="engine" variant="outlined" {...register("engine")} onChange={handleChange} value={state.engine} />
                                {errors.engine?.message && (
                                    <p style={{ color: "red" }}>{errors.engine?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="detailimg" variant="outlined" {...register("detailimg")} onChange={handleChange} value={state.detailimg} />
                                {errors.detailimg?.message && (
                                    <p style={{ color: "red" }}>{errors.detailimg?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="innovation" variant="outlined" {...register("innovation")} onChange={handleChange} value={state.innovation} />
                                {errors.innovation?.message && (
                                    <p style={{ color: "red" }}>{errors.innovation?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="category" variant="outlined" {...register("category")} onChange={handleChange} value={state.category} />
                                {errors.category?.message && (
                                    <p style={{ color: "red" }}>{errors.category?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="rating" variant="outlined" type='number' {...register("rating")} onChange={handleChange} value={state.rating} />
                                {errors.rating?.message && (
                                    <p style={{ color: "red" }}>{errors.rating?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="description" variant="outlined" {...register("description")} onChange={handleChange} value={state.description} />
                                {errors.description?.message && (
                                    <p style={{ color: "red" }}>{errors.description?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="availability" variant="outlined" {...register("availability")} onChange={handleChange} value={state.availability} />
                                {errors.availability?.message && (
                                    <p style={{ color: "red" }}>{errors.availability?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="brand" variant="outlined" {...register("brand")} onChange={handleChange} value={state.brand} />
                                {errors.brand?.message && (
                                    <p style={{ color: "red" }}>{errors.brand?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="sku" variant="outlined" {...register("sku")} onChange={handleChange} value={state.sku} />
                                {errors.sku?.message && (
                                    <p style={{ color: "red" }}>{errors.sku?.message}</p>
                                )}
                            </div>

                            {/* <TextField id="outlined-basic" label="specification" variant="outlined" {...register("specification")} />
                            {errors.specification?.message && (
                                <p style={{ color: "red" }}>{errors.specification?.message}</p>
                            )} */}
                            {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                        </Box>

                        <button type='submit'>Add</button>
                        <button onClick={updateData}>update</button>
                        {/* <input className='search' type="text" placeholder='Search product' value={value} onChange={(e) => setValue(e.target.value)} /> */}
                    </form>

                </div>



                <div className='admin-card'>
                    {
                        data.map((d) => (
                            <div className='featured-card' key={d._id}>
                                <img src={d.img} alt="" />

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
                                        
                                        <p>{d.material}</p>
                                        <p>{d.engine}</p>
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
                                <button onClick={() => deleteData(d._id)}>delete</button>
                                <button onClick={() => editClick(d)}>edit</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminProducts
