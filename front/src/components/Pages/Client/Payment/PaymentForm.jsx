import { Box, Rating } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import emailjs from '@emailjs/browser';

const PaymentForm = ({ cart, removeFromCart, count }) => {


    const onToken = (token) => {
        console.log(token);
    }


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kxs4spn', 'template_i3oflw4', form.current, '7rBw5obZQSl4FSOsd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])


    return (
        <div style={{ width: '80%', margin: '0 auto', padding: '50px 0' }}>
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
            <div style={{ position: 'relative' }}>
                <StripeCheckout
                    token={onToken}
                    stripeKey="pk_test_51NNYzQE5seW1hwSy9x6NNtxPtWyERyh70FGQag8jjS1z2cA8LSGfqGj46fP4h3EvRCeqnLLla6mX1GItgLX8FNyK00uD3KQMmK"
                />



                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' required value={'Ulvi'} style={{ display: 'none' }} />
                    <input type="email" name='user_email' required value={'eyvazovulvi010101@gmail.com'} style={{ display: 'none' }} />
                    <input type="text" name='subject' required value={'Order'} style={{ display: 'none' }} />
                    <button type='submit' style={{ backgroundColor: 'transparent', color: 'transparent', position: 'sticky', position: 'absolute', zIndex: '111', top: 0, width: '10%', cursor: 'pointer', border: '0', height: '20px'}}>send</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentForm
