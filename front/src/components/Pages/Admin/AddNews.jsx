import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import "./index.scss"
import { NewsSchema } from '../../../ProductSchema/NewsSchema';

const AddNews = () => {


    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:4040/news")
        setData(res.data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())));
    };

    const [state, setState] = useState({
        img: "",
        info: "",
        date: "",
        title: "",
        disc: "",
    })
    const [newsId, setNewsId] = useState("")


    const editClick = (ud) => {
        setState({
            img: ud.img,
            info: ud.info,
            date: ud.date,
            disc: ud.disc
        })

        setNewsId(ud._id)
    }


    const updateData = async () => {
        await axios.put(`http://localhost:4040/news/${newsId}`, state)
        setState({
            img: "",
            info: "",
            date: "",
            title: "",
            disc: "",
        })
        await getData()
    }

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(NewsSchema),
    });

    const postNews = async () => {
        const values = getValues()

        await axios.post("http://localhost:4040/news", {
            img: values.img,
            info: values.info,
            date: values.date,
            disc: values.disc
            // specification: values.specification,
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:4040/news/${id}`);
        await getData();
    };

    useEffect(() => {
        getData()
    }, [value])

    return (
        <div className='admin-container'>
            <div className="admin-parent">


                <div style={{ width: '100%', display: 'flex' }}>
                    <form action="" style={{ width: '100%', margin: '0 auto' }} onSubmit={handleSubmit(postNews)}>
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
                                <TextField id="outlined-basic" label="img" variant="outlined" {...register("img")} onChange={handleChange} value={state.img} />
                                {errors.img?.message && (
                                    <p style={{ color: "red" }}>{errors.img?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="info" variant="outlined" {...register("info")} onChange={handleChange} value={state.info} />
                                {errors.info?.message && (
                                    <p style={{ color: "red" }}>{errors.info?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="date" variant="outlined" {...register("date")} onChange={handleChange} value={state.date} />
                                {errors.date?.message && (
                                    <p style={{ color: "red" }}>{errors.date?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="title" variant="outlined" {...register("title")} onChange={handleChange} value={state.title} />
                                {errors.title?.message && (
                                    <p style={{ color: "red" }}>{errors.title?.message}</p>
                                )}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="disc" variant="outlined" {...register("disc")} onChange={handleChange} value={state.disc} />
                                {errors.disc?.message && (
                                    <p style={{ color: "red" }}>{errors.disc?.message}</p>
                                )}
                            </div>
                        </Box>

                        <button type='submit'>Add</button>
                        <button onClick={updateData}>update</button>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    </form>

                </div>



                <div className='admin-card'>
                    {
                        data.map((d) => (
                            <div className='featured-card' key={d._id}>
                                <div className='post-left1'>
                                    <img src={d.img} alt="" />

                                    <div className='post-left1-text'>
                                        <span>{d.info}</span>
                                        <span>{d.date}</span>

                                        <h3>{d.title}</h3>
                                        <p> {d.disc}</p>

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

export default AddNews
