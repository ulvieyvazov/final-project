import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const CartList = ({ cart, removeFromCart }) => {


    const [CART, setCART] = useState([])


    // const removeFromCart = (ca) => {
    //     setCART(CART.filter((product) => product !== ca))
    // }

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART.map((ca, caIndex) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={ca.img} style={{ width: '100px' }} alt="" />
                        <p>{ca.name}</p>
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating name="read-only" value={ca.rating} readOnly />
                        </Box>
                        <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return caIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                })
                                setCART(_CART)
                            }}
                        >-</button>
                        <span>{ca.quantity}</span>
                        <button onClick={() => {
                            const _CART = CART.map((item, index) => {
                                return caIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                            })
                            setCART(_CART)
                        }}>+</button>
                        <p>{ca.price * ca.quantity}</p>


                        <button className='remove-icon' onClick={() => removeFromCart(ca)}>Remove</button>
                    </div>

                ))
            }

            <p> Total
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList
