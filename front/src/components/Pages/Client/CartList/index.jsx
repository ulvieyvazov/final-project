import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import "./index.scss"
import Billing from '../Billing'
import { useNavigate } from 'react-router-dom'

const CartList = ({ cart, removeFromCart }) => {


    const navigate = useNavigate()
    const [CART, setCART] = useState([])


    // const removeFromCart = (ca) => {
    //     setCART(CART.filter((product) => product !== ca))
    // }

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='shopping-cart-container'>
            <div className='shopping-cart-parent'>
                <h1>Shopping Cart</h1>
                {

                    CART.map((ca, caIndex) => (
                        <div className='shopping-child' style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
                            <div className='shopping-child-img' style={{ display: 'flex', width: '40%', alignItems: 'center' }}>
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
                            <div className='shopping-quantity' style={{ display: 'flex', marginTop: '-25px', alignItems: 'center' }}>
                                <div style={{border: '1px solid gray', padding: '4px 8px'}}>
                                    <button
                                        style={{ padding: '1px 6px', backgroundColor: 'transparent', border: 0, fontSize: '20px' }}
                                        onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return caIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                            })
                                            setCART(_CART)
                                        }}
                                    >-</button>
                                    <span>{ca.quantity}</span>
                                    <button
                                        style={{ padding: '1px 5px', backgroundColor: 'transparent', border: 0, fontSize: '19px' }}
                                        onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return caIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                            })
                                            setCART(_CART)
                                        }}>+</button>
                                </div>
                                <p style={{ padding: '0 11px', width: '150px', margin: '0 auto', fontSize: '21px' }}>${ca.discount ? ca.discount * ca.quantity : ca.price * ca.quantity}.00</p>


                            </div>
                            <button className='remove-icon' onClick={() => removeFromCart(ca)}>Remove</button>
                        </div>

                    ))
                }

                <div className='total-bill' style={{ fontSize: '23px', margin: '20px 5px' }}> Total:
                    <span>$
                        {
                            CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)
                        }
                    </span>
                    {/* CART.map((item)=> item.discount ? (item.discount * item.quantity).reduce((total, value) => total + value, 0) :
                    (item.price * item.quantity).reduce((total, value) => total + value, 0)
                    ) */}

                    <button onClick={() => navigate('/billing')}>Order</button>
                </div>
            </div>
        </div>
    )
}

export default CartList
