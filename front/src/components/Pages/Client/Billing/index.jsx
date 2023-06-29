import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BillingSchema } from '../../../../ProductSchema/BillingSchema';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom"
import { Box, Rating } from '@mui/material';
import PaymentForm from '../Payment/PaymentForm';

const Billing = ({ cart, removeFromCart, count }) => {


    // const [data, setData] = useState([])
    // const getData = async () => {
    //     const res = await axios.get("http://localhost:9090/billing")
    //     setData(res.data)
    // }

    const [CART, setCART] = useState([])


    // const removeFromCart = (ca) => {
    //     setCART(CART.filter((product) => product !== ca))
    // }

    useEffect(() => {
        setCART(cart)
    }, [cart])





    const [state, setState] = useState({

        fname: "",
        lname: "",
        country: "",
        address: "",
        city: "",
        phone: "",
        notes: "",
        suite: "",
        state: "",

    })

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(BillingSchema),
    });

    const postProduct = async () => {
        const values = getValues()

        await axios.post("http://localhost:9090/billing", {
            fname: values.fname,
            lname: values.lname,
            country: values.country,
            address: values.address,
            city: values.city,
            phone: values.phone,
            notes: values.notes,
            suite: values.suite,
            state: values.state,
        },)

    }

    const navigate = useNavigate()

    useEffect(() => {
    }, [])


    return (
        <div className='billing-container'>
            <div className='billing-parent' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <form action="" onSubmit={handleSubmit(postProduct)}>
                    <h1>Shipping</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='First Name' name='fname' {...register("fname")} />
                            {errors.fname?.message && (
                                <p style={{ color: "red" }}>{errors.fname?.message}</p>
                            )}
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Last Name' name='lastname' {...register("lname")} />
                            {errors.lname?.message && (
                                <p style={{ color: "red" }}>{errors.lname?.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Street Address</label>
                        <input type="text" placeholder='Street Address' name='Street Address' {...register("address")} />
                        {errors.address?.message && (
                            <p style={{ color: "red" }}>{errors.address?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="">Town / City</label>
                        <input type="text" name='Town / City' {...register("city")} />
                        {errors.city?.message && (
                            <p style={{ color: "red" }}>{errors.city?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="">State / County</label>
                        <input type="text" name='State / County' {...register("state")} />
                        {errors.state?.message && (
                            <p style={{ color: "red" }}>{errors.state?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="">Apartment, suite, unit etc.</label>
                        <input type="text" name='Apartment, suite, unit etc.' {...register("suite")} />
                        {errors.suite?.message && (
                            <p style={{ color: "red" }}>{errors.suite?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="">Phone</label>
                        <input type="text" name='Phone' placeholder='Phone' {...register("phone")} />
                        {errors.phone?.message && (
                            <p style={{ color: "red" }}>{errors.phone?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="">notes</label>
                        <textarea type="text" name='notes' style={{ width: '100%', height: '70px' }} {...register("notes")} />
                        {errors.notes?.message && (
                            <p style={{ color: "red" }}>{errors.notes?.message}</p>
                        )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button type='submit'>Send</button>
                        <button type='submit'>Order</button>
                    </div>
                </form>



                <div>
                    {

                        CART.map((ca, caIndex) => (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ display: 'flex', width: '30%' }}>
                                    <img src={ca.img} style={{ width: '100px' }} alt="" />
                                    <div style={{ width: '100%' }}>
                                        <p>{ca.name}</p>
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 5 },
                                            }}
                                        >
                                            <Rating name="read-only" value={ca.rating} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', marginTop: '-25px', alignItems: 'center' }}>
                                    <p style={{ padding: '0 11px', width: '150px', margin: '0 auto' }}>${ca.discount ? ca.discount * ca.quantity : ca.price * ca.quantity}.00</p>
                                </div>
                            </div>
                        ))
                    }
                    
                    <div>Shipping: ${count * 25}</div>

                    <div style={{ fontSize: '23px', margin: '20px 5px' }}> Total:
                        <span>$
                            {
                                CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, count * 25)
                            }
                        </span>
                        {/* CART.map((item)=> item.discount ? (item.discount * item.quantity).reduce((total, value) => total + value, 0) :
                        (item.price * item.quantity).reduce((total, value) => total + value, 0)
                        ) */}
                    </div>
                    
                    <PaymentForm/>

                </div>
            </div>
        </div>
    )
}

export default Billing
