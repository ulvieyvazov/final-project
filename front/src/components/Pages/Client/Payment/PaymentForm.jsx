import { Box, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = ({ cart, removeFromCart, count }) => {


    const onToken = (token) => {
        console.log(token);
    }
    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])


    return (
        <div style={{width: '80%', margin: '0 auto', padding: '50px 0'}}>
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

            </div>
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51NNYzQE5seW1hwSy9x6NNtxPtWyERyh70FGQag8jjS1z2cA8LSGfqGj46fP4h3EvRCeqnLLla6mX1GItgLX8FNyK00uD3KQMmK"
            />
        </div>
    )
}

export default PaymentForm
